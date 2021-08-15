<script>
	import { variables } from '$lib/variables.js';

    export let name;
    export let uid;
    export let title;
    export let about;
    export let picture;
</script>

<div class="cc-row">

    <div class="cc-page-width">   
        <div class="page-image">
            <img src="{variables.cmsurl + picture.url}" alt="{picture.alternativeText}">
        </div>
             
        <div class="page-content">
            <h3>{name}</h3>
            {about}
        </div> 
    </div>
</div>

<style>
    .cc-page-width {
        display: flex;
        flex-direction: column;
        margin: 1rem;
    }

    .cc-page-width .page-image {
        align-self: center;
        width: 100%;
        max-width: 16rem;
    }

    .cc-page-width .page-image img {
        border-radius: 6px;
        width: 100%;
    }

    .cc-page-width .page-content {
        align-self: center;
        padding: 1rem;
    }

    @media screen and (min-width: 46rem) {
        .cc-page-width {
            flex-direction: row;
        }
        .cc-page-width:nth-child(even) {
            flex-direction: row-reverse;
        }
    }
</style>