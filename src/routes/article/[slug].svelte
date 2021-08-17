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
	  	const res = await fetch('/api/article/' + slug );

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
    import { variables } from '$lib/variables.js';
    export let articles;
    export let article = articles[0];
</script>

<div class="cc-container">

    <div class="cc-hero-image">
        <img src="{variables.cmsurl + article.image.url}" alt="{article.image.alternativeText}"/>
    </div>

    <div class="cc-hero single light">
        <h1> {article.title} </h1>
        <p> {article.description} </p>
    </div>

    <div class="cc-content single">
        {article.content}
    </div>
</div>

<style>
.cc-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:   100vw;
}

.cc-hero-image {
  position: absolute;
  z-index: -1;
  width: 100%;
}

.cc-hero-image img {
  width: 100%;
}

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

.cc-hero.single p {
  background-color:rgba(255,255,255,0.8);
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
}

.cc-hero.single.light p {
  color: rgb(245, 245, 245);
  background-color:rgba(0,0,0,0.6);
}

.cc-content {
  margin: 2.5rem auto 3rem;
  max-width: 65rem;
  width: 90%;
  background-color: rgb(250, 250, 250);
}

.cc-content.single {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14 ),
              0 3px 1px -2px rgba(0, 0, 0, .2),
              0 1px 5px 0 rgba(0, 0, 0, .12);
  padding:    4.36vw;
  background-color: rgb(255, 255, 255);
}

@media screen and (min-width: 1100px) {
  .cc-content.single {
    padding:    3rem;
  }
}
</style>