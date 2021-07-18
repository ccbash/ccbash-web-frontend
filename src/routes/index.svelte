<script context="module">
  export const prerender = true;
      
  try {
    const res = await fetch('/api/home' );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
    
</script>

<script>
	import Header from '$lib/header.svelte';
	import Services from '$lib/services.svelte';
	import Team from '$lib/team.svelte';

	export let data;
</script>

<svelte:head>
	<Header />
</svelte:head>

<!-- HERO -->
<div class="cc-hero">
  <h1>{data.homepage.title}</h1>
  <p>{data.homepage.headline}</p>
</div>
    
<div class="cc-content">

  <Services service={data.categorries} />
  
  <Team team={data.writers} />

</div>

<style>
  	.cc-hero {
	  position: relative;
	  align-items: center;  
	  display: flex;
	  flex-direction: column;
	  height: calc(70vh - 57px);  
	  justify-content: center;  
	  max-height: 500px;  
	  min-height: 400px;
	  max-width: 65rem;
	  width: 90%;
	  padding-top: 3.5rem;
	  margin-left: auto;
	  margin-right: auto;
	  text-align: center;
	}

	.cc-hero img {
	  position: relative;
	}

	.cc-hero h1 {
	  font: 0px/0 a;
	  line-height: 0;
	  color: transparent;
	  text-shadow: none;
	  background-color: transparent;
	  border-style: none;
	}  
</style>
