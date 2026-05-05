// ===========================
//  HAMBURGER / MOBILE MENU
// ===========================
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Swap icon between bars and X
  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains('open')) {
    icon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = menuToggle.querySelector('i');
    icon.classList.replace('fa-xmark', 'fa-bars');
  });
});

// ===========================
//  SCROLL REVEAL
// ===========================
// Add .reveal to every major block automatically
const revealTargets = document.querySelectorAll(
  '.about, .about p, #skills .section-title, .skill-card, ' +
  '#projects .section-title, #projects .section-eyebrow, ' +
  '.project-card, .contact h2, .contact p, form, .socials'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===========================
//  ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

// ===========================
//  CONTACT FORM SUBMIT
// ===========================
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('.btn-primary');
  const original = btn.textContent;

  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#4ade80';
  btn.style.color = '#0b0b10';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    form.reset();
  }, 3500);
});

// ===========================
//  NAVBAR SHADOW ON SCROLL
// ===========================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===========================
//  SMOOTH HERO NAME HIGHLIGHT
// ===========================
// Wrap "Praise" in the h1 with an accent span if not already styled
const heroH1 = document.querySelector('.hero-text h1');
if (heroH1 && !heroH1.querySelector('span')) {
  heroH1.innerHTML = heroH1.innerHTML.replace(
    "I'm Adekunle Praise",
    "I'm Adekunle <span style='color:var(--accent);font-style:italic;'>Praise</span>"
  );
      }
