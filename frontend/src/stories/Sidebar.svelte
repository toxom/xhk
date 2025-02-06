<script lang="ts">
    import type { MenuItem } from '../types/types.ui';
    import { sidebarState, handleMouseEnter, handleMouseLeave, handleNavClick } from '../lib/utils/utils.ui';
    import { LayoutDashboard, Settings } from 'lucide-svelte';
    export let menuItems: MenuItem[] = [
    { id: '1', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { id: '2', label: 'Settings', icon: Settings, href: '/dashboard/settings' }
  ];
    </script>
    
    <aside 
      class="sidebar" 
      class:closed={!$sidebarState.isOpen}
      class:pinned={$sidebarState.isPinned}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >
      <nav on:click={handleNavClick}>
        <ul>
          {#each menuItems as item}
            <li>
              <a href={item.href}>
                {#if item.icon}
                  <span class="icon">
                    <svelte:component this={item.icon} size={24} />
                  </span>
                {/if}
                <span class="label">{item.label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
      
      {#if $sidebarState.tooltipVisible}
        <div 
          class="tooltip"
          style="left: {$sidebarState.tooltipPosition.x}px; top: {$sidebarState.tooltipPosition.y}px"
        >
          {$sidebarState.tooltip}
        </div>
      {/if}
    </aside>
    
    <style>

    .sidebar {
     width: 250px;
     position: absolute;
     top: 5rem;
     bottom: 3rem;
     height: auto;
     color: white;
     /* padding: 1rem; */
     transition: all 0.3s ease;
     overflow: hidden;
     border-right: 1px solid rgba(0, 0, 0, 0.1);

    }
    
    .closed {
     width: 3rem;

    }
    
    .closed .label {
     opacity: 0;
     transition: opacity 0.2s;
    }
    
    .pinned {
    }
    
    nav {
     height: 100%;
     cursor: pointer;
    }
 nav ul {
   list-style: none;
   padding: 0;
 }
 nav a {
   display: flex;
   align-items: center;
   padding: 1rem;
   color: black;
   text-decoration: none;
   gap: 0.5rem;
 }
 nav a:hover {
   background: rgba(255,255,255,0.1);
   border-radius: 4px;
 }

 .tooltip {
     position: fixed;
     background: rgba(0, 0, 0, 0.8);
     color: white;
     padding: 5px 10px;
     border-radius: 4px;
     font-size: 12px;
     transform: translate(-50%, -50%);
     z-index: 1000;
     animation: fadeIn 0.2s;
    }
    
    @keyframes fadeIn {
     from { opacity: 0; }
     to { opacity: 1; }
    }
</style>