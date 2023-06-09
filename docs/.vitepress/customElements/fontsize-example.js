class FontSizeExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @unocss-placeholder
      </style>
      <div class="rounded-8 bg bg-color p-24">
        <span class="text-s">text-xs</span>
        <p class="text-xs mt-0!">The quick warp scientist</p>
        <span class="text-s">text-s</span>
        <p class="text-s mt-0!">The quick warp scientist</p>
        <span class="text-s">text-m</span>
        <p class="text-m mt-0!">The quick warp scientist</p>
        <span class="text-s">text-ml</span>
        <p class="text-ml mt-0!">The quick warp scientist</p>
        <span class="text-s">text-l</span>
        <p class="text-l mt-0!">The quick warp scientist</p>
        <span class="text-s">text-xl</span>
        <p class="text-xl mt-0!">The quick warp scientist</p>
        <span class="text-s">text-xxl</span>
        <p class="text-xxl mt-0!">The quick warp scientist</p>
        <span class="text-s">text-xxxl</span>
        <p class="text-xxxl mt-0!">The quick warp scientist</p>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('fontsize-example', FontSizeExample);
