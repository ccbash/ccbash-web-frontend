<script context="module">
	export const prerender = true;

	export async function load( {fetch} ) {
	  	const res = await fetch('/api/home' );
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
	import Category from '$lib/elements/home_categories.svelte';
	import Team from '$lib/elements/home_team.svelte';
	import Page from '$lib/elements/page.svelte';
	import { variables } from '$lib/variables.js';
    export let homepage;
	export let categories;
	export let writers;
	export let articles;
	// console.log(writers);
</script>

<svelte:head>
	<title>{homepage.headline}</title>
</svelte:head>

<div class="cc-hero">
	<h1>{homepage.headline}</h1>
	<p>
		<img src="{variables.cmsurl + homepage.image.url}" alt="{homepage.image.alternativeText}" style="margin-bottom: 1rem;"/>
		<br/>
		{homepage.description}
	</p>
</div>

<div class="cc-content">
	<h2> Services by ccbash </h2>
	{#each categories as cat}
		<Category {...cat} />
	{/each}

	<h2>Das Team</h2>
	<div class="cc-row content-centered">
		{#each writers as member}
		<Team {...member} />
		{/each}
	</div>

	<h2>Technologien</h2>

	<div class="cc-row content-centered">
		{#each articles as article}
		<Page
			link="{article.slug}"
			image="{article.image}"
			headline="{article.title}"
			description="{article.description}"
			/>
		{/each}
	</div>
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

	.cc-hero p {
		-webkit-font-smoothing: antialiased;
		font-family: "Google Sans Display", Arial, Helvetica, sans-serif;
		font-size: 2rem;
		font-weight: 400;
		line-height: 1.5;
		color: rgb(0, 0, 0); 
		margin: 0px;
		text-align: center;
		padding: 0 10px;
		background-color: transparent;
		border-radius: 4px;
		-moz-hyphens: none;
		-o-hyphens: none;
		-webkit-hyphens: none;
		-ms-hyphens: none;
		hyphens: none; 
	}
	
	.cc-row {
		display: flex;
		width:   100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
