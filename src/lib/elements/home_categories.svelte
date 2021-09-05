<style>
  .block {
    width: 100%;
    position: relative;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 5rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-size: cover;
    overflow: hidden;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }

  .cc-row.light {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .row {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
  }

  .cc-hero-image {
    height: 100%;
    position: absolute;
  }

  .cc-hero-image img {
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .cc-overlay {
    height: 20vw;
    width: 100%;
  }

  @media screen and (min-width: 1100px) {
    .cc-overlay {
      height: 230px;
    }
  }

  .cc-inline-textbox {
    position: relative;
    max-width: 25rem;
    margin-left: 5%;
    margin-bottom: 3rem;
    left: 0px;
    pointer-events: none;
    text-align: left;
    -webkit-font-smoothing: antialiased;
  }

  .cc-inline-textbox.light h3 {
    color: rgb(205, 205, 205);
  }

  .cc-inline-textbox p {
    font-size: 1.5rem;
    text-align: left;
    -moz-hyphens: none;
    -o-hyphens: none;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .cc-inline-textbox.light p {
    color: rgb(245, 245, 245);
  }

  .cc-page {
    display: flex;
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    max-width: 20rem;
    align-items: top;
    text-align: center;
    transition: background-color 0.3s ease-in-out;
  }

  .cc-page:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .cc-page h3 {
    margin: 0.5rem;
  }

  .cc-page h4 {
    color: rgb(50, 50, 50);
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0px;
    margin: 0.5rem;
  }

  .cc-page p {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .cc-page.light h4 {
    color: rgb(225, 225, 225);
  }

  .cc-page.light p {
    color: rgb(225, 225, 225);
  }

  .cc-page-width {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
</style>

<script>
  import { variables } from '$lib/variables.js'

  export let name
  // export let slug;
  export let articles
  export let description
  export let color_schema
  export let image
  // console.log(articles)
</script>

<div class="block">
  <div class="cc-hero-image">
    <img src={variables.cmsurl + image.url} alt={image.alternativeText} />
  </div>

  <div class="cc-overlay" />

  <div class="cc-inline-textbox {color_schema}">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>

  <div class="row {color_schema} content-even">
    {#each articles as article}
      <div class="cc-page {color_schema}">
        <a href={article.slug}>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
        </a>
      </div>
    {/each}
  </div>
</div>
