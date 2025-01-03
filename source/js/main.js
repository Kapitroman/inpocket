import { mobileVhFix } from './utils/mobile-vh-fix.js';

import { Burger } from './modules/burger';
import { initAccordions } from './modules/init-accordion.js';
import { animationCards } from './modules/animation-cards.js';
import { logoAnimation } from './modules/logo-animation.js';
import { initScrollSeparator } from './modules/init-scroll-separator.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    initAccordions();
    animationCards();
    logoAnimation();
    initScrollSeparator();
  });
});
