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

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  let isModalOpen = false;
  refs.modal.addEventListener("click", closeModal);
  window.addEventListener('keydown', handleKeyDown);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

 function handleKeyDown (e)  {
     if (e.code === 'Escape' && isModalOpen) {
         toggleModal()
     };
};
    
 
  // document.body.style.overflow = 'hidden';
    
    function closeModal(evt) {
        console.log(evt.currentTarget)
        console.log(evt.target)
        console.log(evt.code)
        
        if (evt.target === evt.currentTarget) {
            console.log('hi')
            toggleModal()
        };
    };
    
  function toggleModal() {
    isModalOpen = !isModalOpen; // змінна, яка вказує, відкрита чи закрита модалка
    refs.modal.classList.toggle("is-hidden", !isModalOpen);
    document.body.classList.toggle('no-scroll', isModalOpen);
    };

})();



