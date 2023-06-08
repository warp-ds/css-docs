class FontSizeHeadingExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const brandCss = document.createElement('link');
    brandCss.rel = 'stylesheet';
    brandCss.href = 'https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css';
    this.shadowRoot.appendChild(brandCss);

    const unoStyles = document.createElement('style');
    unoStyles.innerHTML = `@unocss-placeholder`;
    this.shadowRoot.appendChild(unoStyles);
    const test = document.createElement('div');
    test.innerHTML = `
    <div class="mx-24">
      <h1 class="h3">Warping</h1>
      <h2 class="h2">The process</h2>
      <p>The quick smart warp scientist ...</p>
      <h2 class="h2">The goal</h2>
      <p>The quick smart warp scientist ...</p>
    </div>
    `;
    this.shadowRoot.appendChild(test);

  }

  connectedCallback() {
    document.addEventListener('change', () => {
      if (window.theme) {
        const stylesheets = this.shadowRoot.querySelectorAll('link');
        stylesheets.forEach((s) => {
          if (s.getAttribute('href').includes('@warp-ds/tokens')) {
            s.setAttribute(
              'href',
              `https://assets.finn.no/pkg/@warp-ds/tokens/v1/${theme}.css`,
            );
          }
        });
      }
    });
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('heading-example', FontSizeHeadingExample);