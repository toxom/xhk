<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	import Header from "../stories/Header.svelte"
	import Footer from "../stories/Footer.svelte"
	import Sidebar from '../stories/Sidebar.svelte';

	let user = $state<{ name: string }>();

	let { children } = $props();
</script>

<Header
{user}
onLogin={() => (user = { name: 'Jane Doe' })}
onLogout={() => (user = undefined)}
onCreateAccount={() => (user = { name: 'Jane Doe' })}
/>

	<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
<Footer/>

