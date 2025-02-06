<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Dropdown from './Dropdown.svelte';
  import { Globe } from 'lucide-svelte';

  const options = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' }
  ];
</script>

<Meta 
  title="Components/Dropdown"
  component={Dropdown}
  argTypes={{
    selectedValue: { control: 'text' },
    icon: { control: 'boolean' }
  }}
/>

<Story name="Default">
  <Dropdown {options} selectedValue="en" />
</Story>

<Story name="With Icon">
  <Dropdown {options} selectedValue="en" icon={Globe} />
</Story>