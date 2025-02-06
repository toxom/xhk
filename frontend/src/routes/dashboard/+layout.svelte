<script lang="ts">
	import Sidebar from '../../stories/Sidebar.svelte';

	let user = $state<{ name: string }>();

	let { children } = $props();
</script>


<Sidebar />


