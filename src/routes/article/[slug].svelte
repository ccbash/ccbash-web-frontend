<style>
  .cc-container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
  }
</style>

<script context="module">
  export async function load({ fetch, page }) {
    const { slug } = page.params
    const res = await fetch('/api/article/' + slug)

    if (res.ok) {
      const data = await res.json()
      return {
        props: data
      }
    }

    return {
      status: res.status,
      error: new Error()
    }
  }
</script>

<script>
  import ComponentBlocksContent from '$lib/components/ComponentBlocksContent.svelte'
  import Hero from '$lib/elements/hero.svelte'
  export let articles
  export let article = articles[0]

  const component = {
    ComponentBlocksContent: ComponentBlocksContent
  }
</script>

<Hero {...article} />

<div class="cc-container">
  {#each article.outline as block}
    <svelte:component this={component[block.__typename]} object={block} />
  {/each}
</div>
