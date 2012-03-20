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
    
    return {
        goToView: goToView
    };
}();