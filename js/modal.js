// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

 


//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
    
//     refs.modal.classList.toggle("is-hidden");
//      document.body.classList.toggle('no-scroll', isMenuOpen);
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  let isModalOpen = false;

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    isModalOpen = !isModalOpen; // змінна, яка вказує, відкрита чи закрита модалка
    refs.modal.classList.toggle("is-hidden", !isModalOpen);
    document.body.classList.toggle('no-scroll', isModalOpen);
  }
})();