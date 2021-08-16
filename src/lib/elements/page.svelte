<script>
  import { variables } from '$lib/variables.js';
  export let link;
  export let image;
  export let headline;
  export let description;
</script>
   
<div class="cc-page">
  <a href="{link}">
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
    background-color: rgba(0,0,0,0.1);
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

  .cc-page img {
    border-radius: 6px;
    margin-bottom: 0.5rem;
    width: 75%;
  }

  .cc-page.light h4 {  
    color: rgb(225, 225, 225);  
  }

  .cc-page.light p {
    color: rgb(225, 225, 225);  
  }
</style>