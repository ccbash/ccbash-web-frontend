<style>
  .cc-content {
    margin: 2.5rem auto 3rem;
    max-width: 65rem;
    width: 90%;
    background-color: rgb(250, 250, 250);
  }

  .cc-content.single {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 4.36vw;
    background-color: rgb(255, 255, 255);
  }

  @media screen and (min-width: 1100px) {
    .cc-content.single {
      padding: 3rem;
    }
  }
</style>

<script>
  import snarkdown from 'snarkdown'

  export let object
</script>

<div class="cc-content single">
  {@html snarkdown(object.content)}
</div>
