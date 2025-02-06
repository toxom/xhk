<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import Sidebar from './Sidebar.svelte';
    import Button from './Button.svelte';
  
    const { Story } = defineMeta({
      title: 'Example/Sidebar',
      component: Sidebar
    });
  
    const sampleItems = [
      { id: '1', label: 'Dashboard', icon: '📊', href: '/', button: Button },
      { id: '2', label: 'Analytics', icon: '📈', href: '/analytics', button: Button }
    ];
  </script>
  
  <Story name="Open" args={{ menuItems: sampleItems, isOpen: true }} />
  
<Story name="Closed" args={{ menuItems: sampleItems, isOpen: false }} />
<Story 
 name="Custom Items" 
 args={{ 
   menuItems: [
     { id: '1', label: 'Custom', icon: '🎨', href: '/custom', button: Button },
     { id: '2', label: 'Menu', icon: '📑', href: '/menu', button: Button }
   ],
   isOpen: true 
 }} 
/>