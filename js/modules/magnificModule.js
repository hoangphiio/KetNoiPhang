export default function magnificModule() {
  jQuery(document).ready(function ($) {
    $(document).on("click", ".dismiss", function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });

    // Youtube
    $(".popup-youtube").magnificPopup({
      // disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedBgPos: true,
      fixedContentPos: true,
      fixedContentPos: true,
    });
  });
}
