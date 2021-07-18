<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	
	export let siteName;
	export let Menu;
 
</script>

<header id="nav-open">
  <a sveltekit:prefetch href="/">{siteName}</a>

  <nav>
    <ul>
      {#each Menu as entry}
  	    <li>
  	      <a sveltekit:prefetch href={entry.slug}>{entry.name}</a>
  	    </li>
      {/each}
    </ul>
  </nav>

  <a class="nav-toggle nav-open" to="#nav-open">
    <i class="fas fa-bars" />
  </a>
  <a class="nav-toggle nav-closed" to="#nav-closed">
    <i class="fas fa-times" />
  </a>
</header>

<style>

header {
	width:100%;
	float:left;
	background-color: rgba(255, 255, 255, 0.9);
	position: fixed;
	z-index:100;
	border-bottom: 1px solid rgba(0,0,0,0.5);
}

.logo {
	display:block;
	height: 3.5rem;
	padding:1em;
	text-decoration:none;
	color:rgba(0,0,0,0.9);
}

nav {
	width:100%;
	float:left;
	height:0;
	overflow:hidden;
	transition:height .2s ease-in-out;
}

nav li {
	float:left;
	width:100%;
}

nav ul {
    list-style: none;
}

nav a {
	display:block;
	height:100%;
	width:100%;
	padding:1em;
	text-decoration:none;
	color:rgba(0,0,0,0.9);
}

nav a:hover {
	background:rgba(0,0,0,0.1);
	border-bottom: 2px solid rgba(133,210,255, 0.2);
}

.nav-toggle {
	display:block;
	position:absolute;
	right:0;
	top:0;
	padding:1em;
	color:rgba(0,0,0,0.9);
	cursor:pointer;
	text-decoration:none;
}

.nav-toggle:hover {
	background:rgba(0,0,0,0.2);
}

#nav-open:target .nav-closed {
	display:block;
}

.nav-closed,
#navi-closed:target .nav-closed,
#nav-open:target .nav-open {
	display:none;
}

@media screen and (max-width: 799px) {
	#nav-open:target nav {
		height:100%;
	}
}

@media screen and (min-width:800px) {
	
	.nav-toggle {display:none !important;}

	
	.logo {
		width:auto;
		float:left;	
	}
	
	nav {
		float:right;
		width:auto;
		display:block !important;
		height:auto;
	}
	
	nav li {
		width:auto;
		padding:0;	
	}
}
</style>
