<script>
  import snarkdown from 'snarkdown'

  export let siteurl;
  export let address;
  export let contact;
  export let footer;
  export let socialnetworks;
	// console.log(menu)
</script>

<footer>
    <div class="cc-container">
  
      <div class="cc-row text-white content-centered" style="padding: 2rem 0 0;">              
   
       <div class="cc-card">
          <ul class="list-unstyled">
            <li>
              <a href="{ siteurl }">
              <img style="height: 40px;" src="https://www.ccbash.de/img/ccbash_logo_bw.png" alt="ccbash Logo Gray">
              </a>
            </li>
            <li style="color: rgb(200, 200, 200); font-size: 1.8rem;">
              {#each socialnetworks as sn}
              <a href="{sn.profilelink}"> <i class="{sn.icon_class}"></i>  </a>
              {/each}
            </li>
          </ul>
        </div>
  
        <div class="cc-card">
          {@html snarkdown(address)}
        </div>
          
        <div class="cc-card">
          {@html snarkdown(contact)}
        </div>
  
        <div class="cc-card">
          <ul class="list-unstyled">
            {#each footer as entry}
            <li><a href="{entry.slug}" sveltekit:prefetch class="followme-link">{entry.name}</a></li>
            {/each}
          </ul>
        </div>
      </div>
  
      <div class="cc-row content-centered bg-black-a8" style="padding: 2rem 0;">
  
        <div class="text-center text-white" sytle="margin: 2rem;">
          © Copyright 
          <a href="https://ccbash.de">ccbash GmbH</a>
          Alle Rechte vorbehalten. ( f18186d )
        </div>
      
      </div>    
    </div>
    
  </footer>

<style>
  .cc-row {
    display: flex;
    width:   100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cc-card {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    list-style: none;
  }
  
  ul {
    padding-left: 0px;
    list-style: none;
  }

  @media screen and (min-width: 400px) {
    .cc-card {
      width: 25%;
    }
  }
</style>