import aosModule from "./modules/aosModule.js";
import menuModule from "./modules/menuModule.js";
import scrollTopModule from "./modules/scrollTopModule.js";
import smoothScrollModule from "./modules/smoothScrollModule.js";
import swiperModule from "./modules/swiperModule.js";

window.addEventListener("DOMContentLoaded", () => {
  aosModule();
  menuModule();
  scrollTopModule();
  smoothScrollModule();
  swiperModule();
});
