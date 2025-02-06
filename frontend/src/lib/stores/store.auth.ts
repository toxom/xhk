import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

interface User {
    name: string;
  }
  
  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  export const authStore = writable<AuthState>({
    isAuthenticated: false,
    user: null
  });
export const login = () => {
  authStore.set({ 
    isAuthenticated: true, 
    user: { name: 'Test User' } 
  });
  goto('/dashboard');
};

export const logout = () => {
  authStore.set({ 
    isAuthenticated: false, 
    user: null 
  });
  goto('/');
};