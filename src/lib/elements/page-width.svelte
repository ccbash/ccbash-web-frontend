<script>
	import { variables } from '$lib/variables.js';
    // export let link;
    export let image;
    export let headline;
    export let description;
</script>


<div class="page-width">   
    <div class="page-image">
        <img src="{variables.cmsurl + image.url}" alt="{image.alternativeText}">
    </div>
            
    <div class="page-content">
        <h3>{headline}</h3>
        {description}
    </div> 
</div>

<style>
    .page-width {
        display: flex;
        flex-direction: column;
        margin: 1rem;
    }

    .page-width .page-image {
        align-self: center;
        width: 100%;
        max-width: 16rem;
    }

    .page-width .page-image img {
        border-radius: 6px;
        width: 100%;
    }

    .page-width .page-content {
        align-self: center;
        padding: 1rem;
    }

    @media screen and (min-width: 46rem) {
        .page-width {
            flex-direction: row;
        }
        .page-width:nth-child(even) {
            flex-direction: row-reverse;
        }
    }
</style>