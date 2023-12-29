export default function scrollTopModule() {
  const scrollTop = () => {
    const btnTop = document.querySelector("#scrollTop");

    const btnReveal = () => {
      if (window.scrollY >= 100) {
        btnTop.classList.add("active");
      } else {
        btnTop.classList.remove("active");
      }
    };

    const throttledScroll = () => {
      let ticking = false;

      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            btnReveal();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const optimizedScroll = throttledScroll();
    window.addEventListener("scroll", optimizedScroll);
  };

  scrollTop();
}
