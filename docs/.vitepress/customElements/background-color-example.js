class BackgroundColorExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @unocss-placeholder
      </style>
      <div class="p-16 border s-border-default s-bg-subtle-default">
        This is an element with <code>s-border-default</code> and <code>s-bg-subtle-default</code> applied to it.
        And <span class="s-text-link">this text</span> is colored using the <code class="s-text-link">s-text-link</code> class. 
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('background-color-example', BackgroundColorExample);
