$(function () {
 
    //var urlBase = '/NewCrudApproach';
    var urlBase = '';

    $('a[href^=#]').click(function (e) {
        e.preventDefault();
        var link = $(e.currentTarget);

        var sectionOut = link.closest('section').removeClass('center');
        
        var idSectionIn = link.attr('href');
        var sectionIn = $(idSectionIn).addClass('center');
    });

    $('.choice').click(function (e) {
        if ($(e.currentTarget).attr('id').indexOf('com') > -1) {
            window.location = urlBase + '/new.html';
        }
        else {
            alert('Not yet. =]');
        }
    });
});