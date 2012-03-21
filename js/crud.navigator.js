crud.navigator = function () {

    var urlBase = '/NewCrudApproach';
    //var urlBase = '';

    $('.choice').click(function (e) {
        if ($(e.currentTarget).attr('id').indexOf('com') > -1) {
            window.location = urlBase + '/new.html';
        }
        else {
            alert('Not yet. =]');
        }
    });

    var goToView = function (from, to) {
        from.removeClass('center');
        to.addClass('center');
    };

    var goToSlide = function (from, direction) {
        var leftSlide = from.prev();
        var rightSlide = from.next();

        if (direction === 'right' && !from.is(':last-child')) {
            from.removeClass('active').addClass('prev');
            rightSlide.removeClass('next').addClass('active');
        }
        else if (direction === 'left' && !from.is(':first-child')) {
            from.removeClass('active').addClass('next');
            leftSlide.removeClass('prev').addClass('active');
        }
    };
    
    return {
        goToView: goToView,
        goToSlide: goToSlide
    };
}();