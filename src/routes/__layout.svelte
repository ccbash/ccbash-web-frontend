<style>
</style>

<script context="module">
  export const prerender = true

  export async function load({ fetch }) {
    const res = await fetch('/api/global')
    if (res.ok) {
      const data = await res.json()
      return {
        props: data
      }
    }

    return {
      status: res.status,
      error: new Error()
    }
  }
</script>

<script>
  import Header from '$lib/elements/header.svelte'
  import Footer from '$lib/elements/footer.svelte'
  import '../app.css'
  export let global
  // console.log(global);
</script>

<Header sitename={global.siteName} siteurl={global.siteUrl} menu={global.Menu} />

<slot />

<Footer
  siteurl={global.siteUrl}
  address={global.address}
  contact={global.contact}
  footer={global.Footer}
  socialnetworks={global.socialnetworks}
/>
