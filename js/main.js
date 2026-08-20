/* =========================================================
   Portfólio · Giovanna Marques — interações
   ========================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Nav: fundo ao rolar ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 2. Menu mobile ---------- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('is-open');
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  // fecha o menu ao clicar num link
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- 3. Efeito de digitação no hero ---------- */
  const typedEl = document.getElementById('typed');
  const roles = [
    'Desenvolvedora Júnior',
    'Front · Back · Dados',
    'Estudante de S.I.',
    'Resolvedora de bugs 🐛',
  ];

  if (typedEl) {
    if (prefersReduced) {
      typedEl.textContent = roles[0];
    } else {
      let roleIdx = 0;
      let charIdx = 0;
      let deleting = false;

      const tick = () => {
        const current = roles[roleIdx];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = current.slice(0, charIdx);

        let delay = deleting ? 45 : 90;

        if (!deleting && charIdx === current.length) {
          delay = 1600;            // pausa no fim da palavra
          deleting = true;
        } else if (deleting && charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          delay = 400;
        }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 700);
    }
  }

  /* ---------- 4. Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // pequeno atraso em cascata para elementos irmãos
            setTimeout(() => entry.target.classList.add('is-visible'), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- 5. Ano atual no footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear() + ' · Giovanna Marques';
})();
