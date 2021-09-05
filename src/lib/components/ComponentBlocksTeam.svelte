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
  import Page_Width from '$lib/elements/page-width.svelte'
  export let object
  // console.log(object);
</script>

<div class="row">
  <h2>{object.Headline}</h2>

  {#each object.authors as member}
    <Page_Width
      image={member.picture}
      headline={member.name}
      description={member.about}
    />
  {/each}
</div>
