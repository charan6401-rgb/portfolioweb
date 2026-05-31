/* ═══════════════════════════════════════════
   Sri Charan Portfolio — script.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Enable reveal animations after JS loads ──
  document.body.classList.add('js-ready');

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Hamburger / Mobile menu ──
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  window.closeMenu = () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -16px 0px' });

    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Fallback: ensure all visible after 900ms
  setTimeout(() => revealEls.forEach(el => el.classList.add('visible')), 900);

  // ── Stagger delays for grid children ──
  document.querySelectorAll('.skills-grid, .projects-grid, .achievements-list').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.07) + 's';
    });
  });

});
