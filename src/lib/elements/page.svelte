<script>
  import { variables } from '$lib/variables.js';
  export let type;
  export let link;
  export let image;
  export let headline;
  export let description;
</script>
   
<div class="page">
  <a href="/{type}/{link}">
    <img src="{variables.cmsurl + image.url}" alt="{image.alternativeText}">
    <h3>{headline}</h3>
    <p>{description}</p>
    <p class="followme-link"> weiterlesen </p> 
  </a>  
</div>

<style>
/* *******************
CC Page
******************** */

  .page {
    display: flex;
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    max-width: 20rem;
    align-items: top;
    text-align: center;
    transition: background-color 0.3s ease-in-out;
  }

  .page:hover {
    background-color: rgba(0,0,0,0.1);
  }

  .page h3 {
    margin: 0.5rem;
  }

  .page p {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .page img {
    border-radius: 6px;
    margin-bottom: 0.5rem;
    width: 75%;
  }

  .followme-link {
    vertical-align: middle;
  }

  .followme-link::before {
    content: "\f0a9 ";
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900;
    margin-right: 0.3rem; 
  }
</style>