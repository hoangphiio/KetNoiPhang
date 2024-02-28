export default function popupModule() {
  $(".popup-open").click(function () {
    $(this)
      .parent(".popup-main")
      .children(".popup-body")
      .addClass("popup-show");
  });

  $(".popup-close, .popup-back").click(function () {
    $(".popup-body").removeClass("popup-show");
  });
}
