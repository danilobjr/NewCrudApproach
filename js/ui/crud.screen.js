$(function () {
    crud.screen = function () {

        var contentHeight;

        var setAppSize = function () {
            var bodyHeight = $('body').height();
            var headerHeight = $('#container > header').height();
            var footerHeight = $('#container > footer').height();
            contentHeight = bodyHeight - (headerHeight + footerHeight);
            $('#content').height(contentHeight);
        };

        var init = function () {
            setAppSize();
        }();

        var getContentHeight = function () {
            return contentHeight;
        };

        return {
            getContentHeight: getContentHeight
        };
    }();
});