export default function scrollTopModule() {
  var basicScrollTop = function () {
    var btnTop = document.querySelector("#scrollTop");

    var btnReveal = function () {
      if (window.scrollY >= 100) {
        btnTop.classList.add("active");
      } else {
        btnTop.classList.remove("active");
      }
    };

    // Listeners
    window.addEventListener("scroll", btnReveal);
  };
  basicScrollTop();
}
