import scrollLock from '../vendor/scroll-lock.min';

const logoAnimation = () => {
  const pageLogo = document.querySelector('.page-logo');

  if (!pageLogo) {
    return;
  }

  const endAnimation = () => {
    scrollLock.enablePageScroll();
    pageLogo.classList.add('is-hidden');
    pageLogo.classList.remove('play');
  }

  scrollLock.disablePageScroll();
  pageLogo.classList.add('play');

  setTimeout(() => endAnimation(), 1600);
};

export { logoAnimation };
