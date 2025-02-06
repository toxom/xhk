<script lang="ts">
  import './button.css';
  import type { ButtonProps } from '../types/types.ui';
  
  export let primary = false;
  export let backgroundColor: string | undefined = undefined;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let label: string;
  export let onClick: (() => void) | undefined = undefined;
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`].join(' ')}
  class:storybook-button--primary={primary}
  class:storybook-button--secondary={!primary}
  style:background-color={backgroundColor}
  onclick={onClick}
>
  {label}
</button>
