<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import Footer from './Footer.svelte';
  
    const { Story } = defineMeta({
      title: 'Example/Footer',
      component: Footer,
      tags: ['autodocs'],
    });
  </script>
  
  <Story name="Default" />
  <Story name="Custom" args={{ companyName: 'Custom Corp' }} />