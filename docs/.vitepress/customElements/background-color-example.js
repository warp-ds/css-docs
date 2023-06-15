class BackgroundColorExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @unocss-placeholder
      </style>
      <div class="p-32 border s-border-subtle-default s-bg-subtle-default">sdsd</div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define(
  'backgroundcolor-example',
  BackgroundColorExample
);
