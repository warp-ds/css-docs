class FontSizeExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @unocss-placeholder
      </style>
      <div>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-xs</span>
        <p class="text-xs mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-s</span>
        <p class="text-s mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-m</span>
        <p class="text-m mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-ml</span>
        <p class="text-ml mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-l</span>
        <p class="text-l mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-xl</span>
        <p class="text-xl mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-xxl</span>
        <p class="text-xxl mt-0!">The quick smart warp scientist</p>
        <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-xxxl</span>
        <p class="text-xxxl mt-0!">The quick smart warp scientist</p>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('fontsize-example', FontSizeExample);