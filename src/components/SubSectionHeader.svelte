<script lang="ts">
  export let text: string;
  export let icon: string;
  export let spacing: string;

  icon += ' fa-xl';
</script>

<div class={spacing}>
  <div class="prose prose-invert flex max-w-none items-baseline gap-6">
    <i class={icon} />
    <h2> {text} </h2>
  </div>
  <hr class="border-b-1 mt-1 border-white opacity-40" />
</div>
