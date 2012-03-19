crud.app = function () {

    var template = crud.template;
    var viewmodel = crud.viewmodel;

    var listUsers = function (e) {
        var href = $(e.currentTarget).attr('href');
        template.render('#users .content', 'usersTemplate', viewmodel.users);
    };
    
    return {
        listUsers: listUsers
    };
}();

$(function () {
 
    var app = crud.app;
    var urlBase = '/NewCrudApproach';
    //var urlBase = '';

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
    
    $('[href=#users]').click(app.listUsers);
});