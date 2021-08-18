<script context="module">
  import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

  export async function load( {fetch, page} ) {
    const { slug } = page.params;
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
    import ComponentBlocksHero from '$lib/components/ComponentBlocksHero.svelte';
    import ComponentBlocksServices from '$lib/components/ComponentBlocksServices.svelte';
    import ComponentBlocksTeam from '$lib/components/ComponentBlocksTeam.svelte';
    export let pages;
    export let page = pages[0];
    
    const component = { 
      ComponentBlocksArticles: ComponentBlocksArticles,
      ComponentBlocksContent: ComponentBlocksContent,
      ComponentBlocksHero: ComponentBlocksHero,
      ComponentBlocksServices: ComponentBlocksServices,
      ComponentBlocksTeam: ComponentBlocksTeam
    };
</script>

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