class FontSizeHeadingExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @unocss-placeholder
      </style>
      <div class="rounded-8 bg bg-color p-24">
        <h1 class="h3">Warping</h1>
        <h2 class="h2">The process</h2>
        <p>The quick smart warp scientist ...</p>
        <h2 class="h2">The goal</h2>
        <p>The quick smart warp scientist ...</p>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('heading-example', FontSizeHeadingExample);
