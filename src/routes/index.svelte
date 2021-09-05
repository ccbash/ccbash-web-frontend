<!--
    redirect / to /all
-->
<script context="module">
	export async function load() {
		return {
			redirect: 'page/index',
			status: 302
		}
	}
</script>