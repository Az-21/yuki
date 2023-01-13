<script lang="ts">
  export let text: string;
  export let icon: string;
  export let spacing: string;

  icon += ' fa-2xl text-emerald-400';
</script>

<div class={spacing}>
  <div class="prose prose-xl prose-invert mt-20 flex max-w-none items-baseline gap-6">
    <i class={icon} />
    <h1>{text}</h1>
  </div>
</div>
