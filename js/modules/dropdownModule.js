export default function dropdownModule() {
  $(document).ready(function () {
    const hamburger = $(".mobile-menu"),
      overlay = $(".overlay"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      $(this).toggleClass("active");
      menu.toggleClass("active");
      overlay.toggleClass("active");
    });
    overlay.on("click", function () {
      $(this).toggleClass("active");
      menu.toggleClass("active");
      hamburger.toggleClass("active")
    });

    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 1130) {
        $(this).children("ul").toggle();
      }
    });
  });
  $(document).ready(function () {
    $(".table-option").hide();
    // content button toggle
    $(".showmore").click(function () {
      $(".table-option").slideToggle(400);
    });
  });

  $(".rotate").click(function () {
    $(this).toggleClass("down");
  });
}
