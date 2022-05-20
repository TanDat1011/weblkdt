
(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('.title-form li').on('click', function () {
            $('.title-form li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.content-form').length > 0) {
            var containerEl = document.querySelector('.content-form');
            var mixer = mixitup(containerEl);
        }
    });
})(jQuery);