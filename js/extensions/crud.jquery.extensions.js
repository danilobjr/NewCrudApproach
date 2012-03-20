(function ($) {

    var toggleSideNavigation = function (element) {

        var parent = $(element).parent();
        if (parent && parent.attr('id') === 'content') {
            var sideNav = $('#side_nav');

            if (element.hasClass('side_nav')) {
                sideNav.fadeIn(500);
            }
            else {
                sideNav.fadeOut(500);
            }
        }
    };

    var originalAddClassFunction = $.fn.addClass;

    $.fn.addClass = function () {

        var result = originalAddClassFunction.apply(this, arguments);

        toggleSideNavigation($(this));

        return result;
    };

})(jQuery);