export default function toggleButton() {
  $(document).ready(function () {
    var $showBtn = $("#show");
    var $toggleBtn = $(".toggle-button");

    $showBtn.click(function () {
      $toggleBtn.slideToggle("flow");

      if ($showBtn.hasClass("toggle-show")) {
        $showBtn
          .addClass("toggle-hide")
          .removeClass("toggle-show")
          .text("[Thu gọn]");
      } else {
        $showBtn
          .removeClass("toggle-hide")
          .addClass("toggle-show")
          .text("[Xem thêm]");
      }
    });
  });
}
