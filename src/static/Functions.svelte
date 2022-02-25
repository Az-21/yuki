<script lang="ts" context="module">
  import type { wingetInterface } from './../static/Metadata.svelte';

  /* --------------------------------- Sorting -------------------------------- */
  export function sortByTitle(x: wingetInterface, y: wingetInterface): number {
    let xTitle: string = x.title.toLowerCase();
    let yTitle: string = y.title.toLowerCase();

    if (xTitle > yTitle) return 1;
    if (xTitle < yTitle) return -1;
    return 0;
  }

  /* ------------------------------ CLI Functions ----------------------------- */
  export function generateWingetCommand(cli: string): string {
    if (cli === '') return 'not available on winget 🙁';
    if (cli.slice(0, 7) === 'custom:') return cli.slice(8, cli.length);
    return `winget install -e --id ${cli}`;
  }

  export function generatePersonalizedCommand(
    wingetAppsCheckbox: boolean[],
    wingetMetadata: wingetInterface[]
  ): string {
    let command: string = '';

    for (let index = 0; index < wingetAppsCheckbox.length; index++) {
      let isWinget: boolean =
        wingetAppsCheckbox[index] &&
        wingetMetadata[index]['cli'].slice(0, 7) !== 'custom:' &&
        wingetMetadata[index]['cli'] !== '';
      if (isWinget) command += `${generateWingetCommand(wingetMetadata[index]['cli'])}; `;
    }

    // Empty selection handler
    if (command === '') command = '🚀 select some apps to generate your custom winget command';

    return command;
  }

  /* ----------------------------- Checked Status ----------------------------- */
  export function generateBooleanList(fillWith: boolean, count: number): boolean[] {
    return new Array(count).fill(fillWith);
  }
</script>
