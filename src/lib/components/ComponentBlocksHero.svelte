<script>
    import { variables } from '$lib/variables.js';
    export let object;
</script>
     
<div class="hero-image">
    <img src="{variables.cmsurl + object.image.url}" alt="{object.image.alternativeText}"/>
</div>

<div class="hero single light">
    <h1> {object.title} </h1>
    <p> {object.description} </p>
</div>

<style>
    .hero-image {
        position: absolute;
        z-index: -1;
        width: 100%;
    }

    .hero-image img {
        width: 100%;
    }

    .hero {
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

    .hero.single p {
        background-color:rgba(255,255,255,0.8);
        font-size: 1.5rem;
        line-height: 1.5;
        text-align: center;
    }

    .hero.single.light p {
        color: rgb(245, 245, 245);
        background-color:rgba(0,0,0,0.6);
    }
</style>