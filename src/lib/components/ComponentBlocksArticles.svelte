<script context="module">
    export async function load( {fetch} ) {
      const res = await fetch('/api/article/latest3' ); // fix that in dynamic
      
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
    import Page from '$lib/elements/page.svelte'
    export let object;
    export let articles;

    console.log(articles);
</script>
     

<div class="row">
    <h2>{object.headline}</h2>
    {#each articles as article}
    <Page
        type="article"
        link="{article.slug}"
        image="{article.image}"
        headline="{article.title}"
        description="{article.description}"
    />
    {/each}
</div>
  
<style>
	.row {
        margin: 0 auto 0;
        max-width: 65rem;
        width: 90%;
        background-color: rgb(250, 250, 250);

  		justify-content: center !important;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>