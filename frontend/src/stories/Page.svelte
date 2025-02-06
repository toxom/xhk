<script lang="ts">
  import './page.css';
  import Button from './Button.svelte';
  import { user } from '$lib/stores/store.user';
  import { goto } from '$app/navigation';
  import Logo1 from '../stories/assets/logo1.svg'

  let loggedInUser = $state<{ name: string } | null>(null);
  user.subscribe((value) => (loggedInUser = value));

  if (loggedInUser) {
    goto('/dashboard');
  }
</script>

<article>
  {#if !loggedInUser}
    <main class="landing-page">
      <section class="hero">
        <div class="hero-content">
          <div>
            <img src={Logo1} alt="Logo" />
          </div>
          <h1>
            <span class="subtitle">XHK is Driving the<br />Future of Money</span>
          </h1>
          <div class="cta-buttons">
            <Button variant="primary">Create Account</Button>
            <Button variant="outline">
              <span class="learn-more">► Learn How XHK Works</span>
            </Button>
          </div>
        </div>
        <div class="hero-image">
          <!-- Currency icons network visualization -->
        </div>
      </section>

      <section class="info">
        <div class="logo-container">
          <div class="logo">
            <span class="xhk-symbol">XHK</span>
          </div>
        </div>
        <div class="info-content">
          <h2>Placeholder</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button variant="text">Learn How XHK Works</Button>
        </div>
      </section>
      <section class="info2">
        <div class="info-content">
          <h2>Placeholder</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button variant="text">Learn How XHK Works</Button>
        </div>
        <div class="logo-container">
          <div class="logo">
            <span class="xhk-symbol">XHK</span>
          </div>
        </div>
      </section>
      <section class="info">
        <div class="logo-container">
          <div class="logo">
            <span class="xhk-symbol">XHK</span>
          </div>
        </div>
        <div class="info-content">
          <h2>Placeholder</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button variant="text">Learn How XHK Works</Button>
        </div>

      </section>
      <section class="info2">
        <div class="info-content">
          <h2>Placeholder</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button variant="text">Learn How XHK Works</Button>
        </div>
        <div class="logo-container">
          <div class="logo">
            <span class="xhk-symbol">XHK</span>
          </div>
        </div>
      </section>
    </main>
  {/if}
</article>

<style lang="scss">


  .landing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: linear-gradient(to bottom, #f7f8f9, #ffffff);

  }

  .hero {
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 4rem 0;
    justify-content: center;
    align-items: center;
  }

  .hero-content {
    h1 {
      font-size: 6.5rem;
      line-height: 1.1;
      
      .subtitle {
        display: block;
        font-size: 5.5rem;
        font-weight: bold;
      }
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .learn-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .info, .info2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 4rem 2rem;
    background: linear-gradient(to left, #e1edf5, #ffffff);
    border-radius: 2rem;
  }

  .info2 {
		background: linear-gradient(to right, #e1edf5, #ffffff);

  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 300px;
    height: 300px;
    background: rgb(0, 163, 163);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .xhk-symbol {
      color: white;
      font-size: 4rem;
      font-weight: bold;
    }
  }

  .info-content {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    .hero, .info {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>