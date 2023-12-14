import aosModule from "./modules/aosModule.js";
import menuModule from "./modules/menuModule.js";
import smoothScroll from "./modules/smoothScroll.js";
import swiperModule from "./modules/swiperModule.js";

window.addEventListener("DOMContentLoaded", () => {
  aosModule();
  menuModule();
  smoothScroll();
  swiperModule();
});
