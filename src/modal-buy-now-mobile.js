(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mobile-buy]'),
    closeModalBtn: document.querySelector('[data-modal-close-mobile-buy]'),
    modal: document.querySelector('[data-modal-mobile-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-buy');
  }
})();
