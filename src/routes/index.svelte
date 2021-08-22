<script context="module">

  export async function load( {fetch} ) {
    const slug = 'index';
    const res = await fetch('/api/page/' + slug );

    if (res.ok) {
      const data = await res.json();
      return { 
        props: data 
      };
    };

    return {
      status: res.status,
      error: new Error()
    };
  }	
</script>

<script>
    import ComponentBlocksArticles from '$lib/components/ComponentBlocksArticles.svelte';
    import ComponentBlocksContent from '$lib/components/ComponentBlocksContent.svelte';
    import ComponentBlocksServices from '$lib/components/ComponentBlocksServices.svelte';
    import ComponentBlocksTeam from '$lib/components/ComponentBlocksTeam.svelte';
    import Hero from '$lib/elements/hero.svelte'
    export let pages;
    export let page = pages[0];
    
    const component = { 
      ComponentBlocksArticles: ComponentBlocksArticles,
      ComponentBlocksContent: ComponentBlocksContent,
      ComponentBlocksServices: ComponentBlocksServices,
      ComponentBlocksTeam: ComponentBlocksTeam
    };
</script>

<Hero {...page} />

<div class="cc-container">
    {#each page.outline as block}
        <svelte:component this={component[block.__typename]} object={block} />
    {/each}
</div>

<style>
.cc-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:   100vw;
}
</style>