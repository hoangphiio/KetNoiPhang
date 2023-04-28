export default function dropdownModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      menu.toggleClass("active");
      $(this).toggleClass("active");
      $(".overlay").toggleClass("active");
    });
    $(".mobile-menu").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 1130) {
        $(this).children("ul").fadeToggle();
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
