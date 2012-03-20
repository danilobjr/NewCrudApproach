crud.app = function () {

    var data = crud.data;
    var navigator = crud.navigator;
    var views = crud.views;

    var listUsers = function (e) {
        views.users.render(data.users);
    };
    
    var navigate = function (e) {
        e.preventDefault();
        var link = $(e.currentTarget);
        var from = link.closest('section');
        var to = $(link.attr('href'));

        navigator.goToView(from, to);
    };

    var enter = function (e) {
    };

    return {
        listUsers: listUsers,
        navigate: navigate
    };
}();

$(function () {
 
    var app = crud.app;

    $('a[href^=#]').click(app.navigate);
    $('.choice').click(app.enter);
    $('[href=#users]').click(app.listUsers);
});