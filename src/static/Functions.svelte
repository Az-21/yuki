<script lang="ts" context="module">
  import type { wingetInterface } from './../static/Metadata.svelte';

  /* --------------------------------- Sorting -------------------------------- */
  export function sortByTitle(x: wingetInterface, y: wingetInterface): number {
    let xTitle: string = x.title.toLowerCase();
    let yTitle: string = y.title.toLowerCase();

    if (xTitle > yTitle) return 1;
  }

  /* ------------------------------ CLI Functions ----------------------------- */
  // Generate winget cli command
  export function generateWingetCommand(cli: string): string {
    if (cli === '') return 'not available on winget 🙁';
    if (cli.slice(0, 7) === 'custom:') return cli.slice(8, cli.length);
    return `winget install -e --id ${cli}`;
  }

  /* ----------------------------- Checked Status ----------------------------- */
  export function generateBooleanList(fillWith: boolean, count: number): boolean[] {
    return new Array(count).fill(fillWith);
  }
</script>
