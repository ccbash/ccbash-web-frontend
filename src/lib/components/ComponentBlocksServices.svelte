<style>
  .row {
    margin: 0 auto 0;
    max-width: 65rem;
    width: 90%;
    background-color: rgb(250, 250, 250);

    justify-content: center !important;
    display: flex;
    /* width:   100%; */
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<script>
  import Category from '$lib/elements/home_categories.svelte'
  export let object
  // console.log(object)
</script>

<div class="row">
  <h2>{object.headline}</h2>

  {#each object.categories as cat}
    <Category {...cat} />
  {/each}
</div>
