export default function toggleButton() {
  $(document).ready(function () {
    const $showBtn = $("#show");
    const $toggleContent = $(".toggle-button");

    $showBtn.click(function () {
      $toggleContent.slideToggle("flow");

      $showBtn.toggleClass("toggle-show toggle-hide").text(function () {
        return $(this).hasClass("toggle-show") ? "[Xem thêm]" : "[Thu gọn]";
      });
    });
  });
}
