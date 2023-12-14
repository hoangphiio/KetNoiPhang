export default function menuModule() {
  const menuBar = document.querySelector(".hd-bar");
  const hdMenu = document.querySelector(".hd-menu");
  const overlay = document.querySelector(".overlay");
  const btnSubs = document.querySelectorAll(".subBtn");
  const body = document.querySelector("body");

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1201) {
      closeMenu();
    }
  });

  if (menuBar) {
    menuBar.onclick = () => {
      menuBar.classList.add("active");
      hdMenu.classList.add("active");
      overlay.classList.add("active");
      body.classList.add("no-scroll");
    };

    overlay.onclick = () => {
      closeMenu();
    };
  }

  function closeMenu() {
    menuBar.classList.remove("active");
    hdMenu.classList.remove("active");
    overlay.classList.remove("active");

    if (window.innerWidth < 1201) {
      $(".submenu").slideUp();
    }

    btnSubs.forEach((btnSub) => {
      btnSub.classList.remove("active");
    });

    body.classList.remove("no-scroll");
  }

  $(document).ready(function () {
    if (window.innerWidth < 1201) {
      $(".subBtn").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).next(".submenu").stop().slideToggle();
      });
    }
  });
}
