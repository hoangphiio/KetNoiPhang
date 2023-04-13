export default function dropdownModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      menu.slideToggle();
      $(this).toggleClass("active");
    });
    $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 1120) {
        $(this).children("ul").fadeToggle(150);
      }
    });
  });

  $(document).ready(function () {
    // content button toggle
    $(".table-option").hide();
    $(".button").click(function () {
      $(".table-option").slideToggle(400);
    });
  });

  $(".rotate").click(function () {
    $(this).toggleClass("down");
})
}
