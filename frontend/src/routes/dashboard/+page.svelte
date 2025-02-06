<script lang="ts">
import { user } from '$lib/stores/store.user';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load = () => {
  const userData = get(user);
  if (!userData) {
    throw redirect(307, '/');
  }
  return { user: userData };
};
    </script>
    
    <main>
     <h1>Dashboard</h1>
     {#if $user}
       <p>Welcome, {$user.name}!</p>
     {/if}
    </main>