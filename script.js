document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const mainLogo = document.getElementById('main-logo');
  const langBtn = document.getElementById('lang-btn');

  const closeMenu = () => {
    if (navLinks) navLinks.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('is-active');
    if (mainLogo) mainLogo.classList.remove('hidden');
    if (langBtn) langBtn.classList.remove('hidden');
  };

  if (mobileMenu && navLinks && mainLogo && langBtn) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('is-active');
      mainLogo.classList.toggle('hidden');
      langBtn.classList.toggle('hidden');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});