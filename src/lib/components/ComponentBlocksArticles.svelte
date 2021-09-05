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

<script>
  import { onMount } from 'svelte'
  import Page from '$lib/elements/page.svelte'

  let data = {}
  let articles = []
  export let object

  onMount(async () => {
    const res = await fetch('/api/article/latest.' + object.count)
    data = await res.json()
    articles = data.articles
  })
</script>

<div class="row">
  <h2>{object.headline}</h2>

  {#each articles as article}
    <Page
      type="article"
      link={article.slug}
      image={article.image}
      headline={article.title}
      description={article.description}
    />
  {/each}
</div>
