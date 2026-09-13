import { describe, expect, it } from "vitest";

import {
  combinedInstallCommand,
  combinedSourceCommands,
  hasMise,
  installableStores,
  installCommand,
  sourcePackageIds,
  unavailableWarnings,
} from "./commands";
import { desktopApps } from "./data";
import type { DesktopApp, SourceListing } from "./schema";

function app(name: string, stores: SourceListing[]): DesktopApp {
  return { name, description: "", monetization: "free", tags: [], stores };
}

const bun = app("Bun", [
  { source: "winget", id: "Oven-sh.Bun" },
  { source: "mise", id: "bun" },
]);

const brewFormula = app("Formula", [{ source: "brew", id: "bun" }]);
const brewCask = app("Cask", [{ source: "brew", id: "onlyoffice", cask: true }]);

const onlyWinget = app("Only Winget", [
  { source: "winget", id: "Example.App" },
  { source: "brew", id: null },
  { source: "yay", id: null },
  { source: "mise", id: null },
]);

describe("installCommand", () => {
  it("uses the install prefix for each source", () => {
    expect(installCommand("winget", "App.Id")).toBe("winget install App.Id");
    expect(installCommand("brew", "app")).toBe("brew install app");
    expect(installCommand("yay", "app")).toBe("yay -S app");
    expect(installCommand("mise", "app")).toBe("mise use -g app");
  });

  it("adds the cask flag for a Homebrew cask", () => {
    expect(installCommand("brew", "onlyoffice", true)).toBe("brew install --cask onlyoffice");
  });

  it("ignores the cask flag for a source other than Homebrew", () => {
    expect(installCommand("mise", "bun", true)).toBe("mise use -g bun");
  });
});

describe("installableStores", () => {
  it("drops null ids and puts mise first", () => {
    const app = desktopApps.find((entry) => entry.name === "ONLYOFFICE");
    expect(app).toBeDefined();
    expect(installableStores(app as DesktopApp).map((store) => store.source)).toEqual(["winget", "brew", "yay"]);
  });

  it("sorts mise ahead of the OS sources", () => {
    const app = desktopApps.find((entry) => entry.name === "Bun");
    expect(app).toBeDefined();
    expect(installableStores(app as DesktopApp).map((store) => store.source)).toEqual([
      "mise",
      "winget",
      "brew",
      "yay",
    ]);
  });
});

describe("hasMise", () => {
  it("is true when the app has a mise id", () => {
    expect(hasMise(bun)).toBe(true);
  });

  it("is false when the mise id is missing", () => {
    expect(hasMise(onlyWinget)).toBe(false);
  });

  it("is false when there is no mise listing at all", () => {
    expect(hasMise(app("Empty", []))).toBe(false);
  });
});

describe("sourcePackageIds", () => {
  it("collects the ids for a source in input order", () => {
    expect(sourcePackageIds([onlyWinget, bun], "winget")).toEqual(["Example.App"]);
  });

  it("drops a mise app from the other sources", () => {
    expect(sourcePackageIds([bun], "brew")).toEqual([]);
    expect(sourcePackageIds([bun], "yay")).toEqual([]);
  });

  it("keeps a mise app in the mise source", () => {
    expect(sourcePackageIds([bun], "mise")).toEqual(["bun"]);
  });

  it("ignores a null id", () => {
    expect(sourcePackageIds([onlyWinget], "brew")).toEqual([]);
  });
});

describe("combinedSourceCommands", () => {
  it("returns one command per source in source order", () => {
    expect(combinedSourceCommands(desktopApps)).toEqual([
      {
        source: "mise",
        command:
          "mise use -g bun neovim yt-dlp typst zoxide bat ripgrep atuin chezmoi fastfetch television rumdl uv starship",
      },
      {
        source: "winget",
        command:
          "winget install Git.Git jdx.mise ONLYOFFICE.DesktopEditors M2Team.NanaZip DesktopPlus.DesktopPlus Microsoft.Edge Mozilla.Firefox Microsoft.PowerToys OBSProject.OBSStudio qBittorrent.qBittorrent Valve.Steam Microsoft.VisualStudioCode",
      },
      {
        source: "brew",
        command:
          "brew install git mise && brew install --cask onlyoffice desktop-plus/tap/desktop-plus microsoft-edge firefox obs qbittorrent steam visual-studio-code",
      },
      {
        source: "yay",
        command:
          "yay -S git mise onlyoffice-bin desktop-plus-bin microsoft-edge-stable-bin firefox obs-studio qbittorrent steam visual-studio-code-bin",
      },
    ]);
  });

  it("chains Homebrew formulae and casks with && into one command", () => {
    expect(combinedSourceCommands([brewFormula, brewCask])).toEqual([
      { source: "brew", command: "brew install bun && brew install --cask onlyoffice" },
    ]);
  });

  it("omits sources with nothing to install", () => {
    expect(combinedSourceCommands([onlyWinget])).toEqual([{ source: "winget", command: "winget install Example.App" }]);
  });

  it("returns nothing when no app has a usable id", () => {
    expect(combinedSourceCommands([])).toEqual([]);
  });
});

describe("combinedInstallCommand", () => {
  it("builds one command per source with mise taking priority", () => {
    expect(combinedInstallCommand(desktopApps)).toBe(
      [
        "mise use -g bun neovim yt-dlp typst zoxide bat ripgrep atuin chezmoi fastfetch television rumdl uv starship",
        "winget install Git.Git jdx.mise ONLYOFFICE.DesktopEditors M2Team.NanaZip DesktopPlus.DesktopPlus Microsoft.Edge Mozilla.Firefox Microsoft.PowerToys OBSProject.OBSStudio qBittorrent.qBittorrent Valve.Steam Microsoft.VisualStudioCode",
        "brew install git mise && brew install --cask onlyoffice desktop-plus/tap/desktop-plus microsoft-edge firefox obs qbittorrent steam visual-studio-code",
        "yay -S git mise onlyoffice-bin desktop-plus-bin microsoft-edge-stable-bin firefox obs-studio qbittorrent steam visual-studio-code-bin",
      ].join("\n"),
    );
  });

  it("omits sources with nothing to install", () => {
    expect(combinedInstallCommand([onlyWinget])).toBe("winget install Example.App");
  });

  it("returns an empty string for no apps", () => {
    expect(combinedInstallCommand([])).toBe("");
  });
});

describe("unavailableWarnings", () => {
  it("warns about an app missing on an OS when mise cannot cover it", () => {
    const nanazip = desktopApps.find((app) => app.name === "NanaZip");
    expect(nanazip).toBeDefined();
    expect(unavailableWarnings([nanazip as DesktopApp])).toEqual([
      "Not available on macOS: NanaZip",
      "Not available on Arch Linux: NanaZip",
    ]);
  });

  it("does not warn about an app that mise can install", () => {
    expect(unavailableWarnings([bun])).toEqual([]);
  });
});
