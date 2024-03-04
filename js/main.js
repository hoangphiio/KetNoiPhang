import aosModule from "./modules/aosModule.js";
import magnificModule from "./modules/magnificModule.js";
import menuModule from "./modules/menuModule.js";
import popupModule from "./modules/popupModule.js";
import scrollTopModule from "./modules/scrollTopModule.js";
import smoothScrollModule from "./modules/smoothScrollModule.js";
import swiperModule from "./modules/swiperModule.js";
import tabModule from "./modules/tabModule.js";
import toggleButton from "./modules/toggleButton.js";

window.addEventListener("DOMContentLoaded", () => {
  aosModule();
  magnificModule();
  menuModule();
  popupModule();
  scrollTopModule();
  smoothScrollModule();
  swiperModule();
  tabModule();
  toggleButton();
});
