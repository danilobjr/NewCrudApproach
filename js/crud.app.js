crud.app = function () {

    var data = crud.data;
    var navigator = crud.navigator;
    var usersView = crud.views.users;

    var listUsers = function (e) {
        usersView.render(data.users);
    };
    
    var navigate = function (e) {
        e.preventDefault();
        var link = $(e.currentTarget);
        var from = link.closest('section');
        var to = $(link.attr('href'));

        navigator.goToView(from, to);
    };

    var goToPreviousSlide = function (e) {
        var from = $('.slide').filter('.active');
        navigator.goToSlide(from, 'left');
    };

    var goToNextSlide = function (e) {
        var from = $('.slide').filter('.active');
        navigator.goToSlide(from, 'right');
    };

    var enter = function (e) {
    };

    return {
        listUsers: listUsers,
        navigate: navigate,
        goToPreviousSlide: goToPreviousSlide,
        goToNextSlide: goToNextSlide
    };
}();

$(function () {
 
    var app = crud.app;

    $('a[href^=#]').click(app.navigate);
    $('.choice').click(app.enter);
    $('[href=#users]').click(app.listUsers);
    $('#side_nav .prev').click(app.goToPreviousSlide);
    $('#side_nav .next').click(app.goToNextSlide);
});