<script lang="ts">
  import './header.css';
  import Button from './Button.svelte';
  import { LogOutIcon, Globe, ChevronDown } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import type { AuthProps } from '../types/types.ui';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import Dropdown from './Dropdown.svelte';

  const { user, onLogin, onLogout, onCreateAccount }: AuthProps = $props();
 
  let currentLang = 'en';
 
  type LangCode = 'en' | 'ru' | 'zh-ch' | 'zh-hk';
 
  const languages: Array<{code: LangCode, label: string}> = [
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'ru', label: '🇷🇺 RU' }, 
    { code: 'zh-ch', label: '🇨🇳 ZH' },
    { code: 'zh-hk', label: '🇭🇰 ZH' }
  ];
 
  const flagEmojis: Record<LangCode, string> = {
    'en': '🇬🇧',
    'ru': '🇷🇺',
    'zh-ch': '🇨🇳',
    'zh-hk': '🇭🇰'
  };
 
  const handleLogin = () => {
    onLogin?.();
    goto('/dashboard');
  };
 
  const handleLogout = () => {
    onLogout?.();
    goto('/');
  };
 
  const handleLanguageChange = (event: CustomEvent<string>) => {
    currentLang = event.detail as LangCode;
  };
 </script>
<header>
  <div class="storybook-header">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" viewBox="0 0 100 32">
        <!-- Background rounded square -->
        <rect x="5" y="2" width="90" height="28" rx="8" fill="#FFF"/>
        <!-- X -->
        <path d="M15 8 L25 16 L15 24 M25 8 L15 16 L25 24" 
              stroke="#555AB9" 
              stroke-width="3" 
              stroke-linecap="round"
              fill="none"/>
        
        <!-- H -->
        <path d="M35 8 L35 24 M35 16 L50 16 M50 8 L50 24" 
              stroke="#91BAF8" 
              stroke-width="3" 
              stroke-linecap="round"
              fill="none"/>
        
        <!-- K -->
        <path d="M60 8 L60 24 M60 16 L75 8 M60 16 L75 24" 
              stroke="#555AB9" 
              stroke-width="3" 
              stroke-linecap="round"
              fill="none"/>
      </svg>
    </div>
    <div class="buttons">

      <a href="/docs">
        <Button size="large" label="Docs" />
      </a>
      <Dropdown
        options={languages}
        selectedValue={currentLang}
        on:select={handleLanguageChange}
      />
      {#if user}
        <span class="welcome">
          <b>{user.name}</b>
        </span>
        <button class="logout-btn" on:click={handleLogout}>
          <LogOutIcon size={24} />
        </button>
      {:else}
        <Button primary size="large" onClick={onCreateAccount} label="Sign up" />
        <Button size="large" onClick={handleLogin} label="Log in" />
        {/if}
    </div>
  </div>
</header>

<style>
.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.logout-btn:hover {
  background: rgba(0,0,0,0.1);
}

.language-selector {
   position: relative;
   margin-right: 1rem;
 }

 .lang-btn {
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.5rem;
   border: none;
   background: none;
   cursor: pointer;
 }

 .lang-dropdown {
   position: absolute;
   top: 100%;
   right: 0;
   background: white;
   border-radius: 4px;
   box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 }

 .lang-option {
   width: 100%;
   padding: 0.5rem 1rem;
   border: none;
   background: none;
   cursor: pointer;
   text-align: left;
 }

 .lang-option:hover {
   background: #f5f5f5;
 }

 .lang-option.active {
   background: #eee;
 }
</style>
```