<script lang="ts">
  export let companyName = 'HSK';
  export let year = new Date().getFullYear();
  import Logo1 from '../stories/assets/logo1.svg'

  let footerHeight = '3rem';
  let tooltipVisible = false;
  let tooltip = '';
  let tooltipPosition = { x: 0, y: 0 };
  
  interface FooterSection {
    title: string;
    links: { text: string; href: string; }[];
  }
  
  const footerSections: FooterSection[] = [
    {
      title: 'XHK',
      links: [
        { text: 'Why XHK?', href: '/why-xhk' },
        { text: 'How It Works', href: '/how-it-works' },
        { text: 'Knowledge Base', href: '/knowledge' },
        { text: 'Transparency', href: '/transparency' },
        { text: 'Fees', href: '/fees' }
      ]
    },
    {
      title: 'Products',
      links: [
        { text: 'XHK token CNHx', href: '/cnhx' },
        { text: 'XHK token EURx', href: '/eurx' },
        { text: 'XHK token MXNx', href: '/mxnx' },
        { text: 'XHK token USDx', href: '/usdx' },
        { text: 'XHK Gold token - XAUx', href: '/xaux' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { text: 'For Individuals', href: '/individuals' },
        { text: 'For Merchants', href: '/merchants' },
        { text: 'For Exchanges', href: '/exchanges' }
      ]
    }
  ];
  
  function handleClickFooter(e: MouseEvent) {
    if ((e.target as HTMLElement).tagName === 'FOOTER') {
      tooltip = footerHeight === '6rem' ? 'Footer collapsed' : 'Footer expanded';
      tooltipVisible = true;
      tooltipPosition = {
        x: e.clientX,
        y: e.clientY
      };
      footerHeight = footerHeight === '3rem' ? '6rem' : '3rem';
      
      setTimeout(() => {
        tooltipVisible = false;
      }, 1500);
    }
  }
  </script>
  <footer 
    class="footer"
    style="height: {footerHeight}"
    on:mouseenter={() => footerHeight = '300px'}
    on:mouseleave={() => footerHeight = '3rem'} 
    on:click={handleClickFooter}
  >
    <div class="content">
      <div class="footer-grid">
        <div>
          <img src={Logo1} alt="Logo" />
        </div>
        {#each footerSections as section}
          <div class="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {#each section.links as link}
                <li><a href={link.href}>{link.text}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <p>© {year} {companyName}. All rights reserved.</p>
    </div>
  {#if tooltipVisible}
  <div 
     class="tooltip"
     style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px"
   >
  {tooltip}
  </div>
  {/if}
  </footer>
  <style>
  .footer {
    padding: 1rem 0;
    background-color: #f8f9fa;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: height 0.3s ease;
    overflow: hidden;
  }
  
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: left;
    margin-bottom: 2rem;
  }
  
  .footer-section h3 {
    color: #333;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .footer-section a:hover {
    color: #333;
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
  
  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  </style>