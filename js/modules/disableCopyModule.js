export default function disableCopyModule() {
  $(function () {
    $(this).bind("contextmenu", function (e) {
      e.preventDefault();
    });
  });
  (function ($) {
    $.fn.ctrl = function (key, callback) {
      if (!$.isArray(key)) {
        key = [key];
      }
      callback =
        callback ||
        function () {
          return false;
        };
      return $(this).keydown(function (e) {
        $.each(key, function (i, k) {
          if (e.keyCode == k.toUpperCase().charCodeAt(0) && e.ctrlKey) {
            return callback(e);
          }
        });
        return true;
      });
    };

    $.fn.disableSelection = function () {
      this.ctrl(["a", "s", "c"]);

      return this.attr("unselectable", "on")
        .css({
          "-moz-user-select": "-moz-none",
          "-moz-user-select": "none",
          "-o-user-select": "none",
          "-khtml-user-select": "none",
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        })
        .bind("selectstart", function () {
          return false;
        });
    };
  })(jQuery);
  $(":not(input,select,textarea)").disableSelection();
}
