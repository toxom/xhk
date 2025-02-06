
<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	import Page from "../stories/Page.svelte"
	import Footer from "../stories/Footer.svelte"

	let { children } = $props();
</script>
<Page />

<style lang="scss">

</style>
