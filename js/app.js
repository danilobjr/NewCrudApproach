$(function () {
 
    var currentReverse;
    var lastReverse;
    //var urlBase = '/NewCrudApproach';
    var urlBase = '';

    $('a[href^=#]').click(function (e) {
        e.preventDefault();
        var linkClicado = $(e.currentTarget);

        var sectionOut = linkClicado.closest('section');
        
        lastReverse = sectionOut.attr('class');
        sectionOut.removeAttr('class').addClass((currentReverse) ? currentReverse : 'up');

        var idSectionIn = linkClicado.attr('href');
        var sectionIn = $(idSectionIn);
        currentReverse = sectionIn.attr('class');
        sectionIn.removeAttr('class').addClass((lastReverse) ? lastReverse : 'center');
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