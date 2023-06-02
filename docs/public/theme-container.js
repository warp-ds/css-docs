import styles from '/__uno.css';

class ThemeContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const brandCss = document.createElement('link');
    brandCss.rel = 'stylesheet';
    brandCss.href = 'https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css';
    this.shadowRoot.appendChild(brandCss);

    const unoStyles = document.createElement('style');
    unoStyles.innerHTML = styles;
    this.shadowRoot.appendChild(unoStyles);

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

customElements.define('theme-container', ThemeContainer);