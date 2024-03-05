export default function magnificModule() {
  jQuery(document).ready(function ($) {
    // Kiểm tra xem trang có nút dismiss hay không
    if ($(".dismiss").length > 0) {
      $(document).on("click", ".dismiss", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    }

    // Kích hoạt Magnific Popup chỉ trên trang có yêu cầu
    if ($(".popup-youtube").length > 0) {
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
    }
  });
}
