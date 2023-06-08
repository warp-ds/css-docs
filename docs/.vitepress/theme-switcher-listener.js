document.addEventListener('change', () => {
  if (window.theme) {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
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