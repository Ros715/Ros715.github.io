(() => {
  const refs2 = {
    openModalBtn: document.querySelector('[mobile-menu-open]'),
    closeModalBtn: document.querySelector('[mobile-menu-close]'),
    modal: document.querySelector('[mobile-menu]'),
  };

  refs2.openModalBtn.addEventListener('click', toggleModal2);
  refs2.closeModalBtn.addEventListener('click', toggleModal2);

  function toggleModal2() {
    refs2.modal.classList.toggle('is-hidden');
  }
})();