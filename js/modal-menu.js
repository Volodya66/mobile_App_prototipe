
export default function modal ()  {
  
}
(() => {
  
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const body = document.body;
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('is-open', isMenuOpen);
    body.classList.toggle('no-scroll', isMenuOpen);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });
})();