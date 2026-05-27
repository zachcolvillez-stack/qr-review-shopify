/* QR Review Co. — minimal global JS */

// Fade-in on scroll
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();

// Mobile menu
(function () {
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!openBtn || !menu) return;
  openBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
})();

// Sticky mobile CTA — shown after scrolling past hero
(function () {
  const sticky = document.querySelector('[data-sticky-cta]');
  const hero = document.querySelector('[data-hero]');
  if (!sticky || !hero) return;
  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0 });
  observer.observe(hero);
})();

// Product variant selector
(function () {
  document.querySelectorAll('[data-variant-group]').forEach(group => {
    group.querySelectorAll('[data-variant]').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('[data-variant]').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const variantId = btn.dataset.variant;
        const input = document.querySelector('[data-variant-input]');
        if (input) input.value = variantId;
        const priceEl = document.querySelector('[data-variant-price]');
        if (priceEl && btn.dataset.price) priceEl.textContent = btn.dataset.price;
      });
    });
  });
})();
