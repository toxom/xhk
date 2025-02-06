<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let options: Array<{code: string, label: string}>;
  export let selectedValue: string;
  export let icon: any = null;

  let isOpen = false;
  const dispatch = createEventDispatcher();

  function handleSelect(value: string) {
    selectedValue = value;
    isOpen = false;
    dispatch('select', value);
  }

  $: selectedLabel = options.find(opt => opt.code === selectedValue)?.label || selectedValue;

</script>

<div class="dropdown">
    <button class="dropdown-btn" on:click={() => isOpen = !isOpen}>
      {#if icon}
        <svelte:component this={icon} size={16}/>
      {/if}
      {selectedLabel}
      ▼
    </button>
   
    {#if isOpen}
      <div class="dropdown-content" transition:fade>
        {#each options as {code, label}}
          <button 
            class="dropdown-item" 
            class:active={code === selectedValue}
            on:click={() => handleSelect(code)}
          >
            {label}
          </button>
        {/each}
      </div>
    {/if}
   </div>

<style>
  .dropdown {
    position: relative;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #eee;
    border-radius: 2rem;
    background: white;
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: left;
    /* min-width: 120px; */
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 100;
  }

  .dropdown-item {
    width: 100%;
    /* padding: 0.5rem 1rem; */
    border: none;
    background: #e1e1e1;
    margin-left: 0;
    cursor: pointer;
    text-align: left;
  }

  .dropdown-item:hover {
    background: #f5f5f5;
  }

  .dropdown-item.active {
    background: #ffffff;
  }
</style>