<script context="module">
  export const prerender = true;
      
  try {
    const res = await fetch('/api/global' );
    const globals = await res.json();
    console.log(globals);
  } catch (err) {
    console.error(err);
  }
    
</script>

<script>
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<Header {...globals.body.data} />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
  