crud.views.users = function () {

    var _template = crud.template;
    var _screen;
    var _maxUsersTilesBySlide = 6;

    var render = function (users) {
        var slides = format(users);
        _template.render('#users .content', 'usersTemplate', slides);
    };

    var format = function (users) {
        if (!_screen) {
            _screen = crud.screen;
        }

        var contentHeight = _screen.getContentHeight();
                
        if(contentHeight > 663 && contentHeight <= 855) {
            _maxUsersTilesBySlide = 9;
        }

        var slides = [];

        $.each(users, function (index, user) {

            if (isInteger(index / _maxUsersTilesBySlide)) {
                var elementClass = (!index) ? 'active' : 'next';
                contentSlide = { users: [], elementClass: elementClass };
                slides.push(contentSlide);
            }

            contentSlide.users.push(user);
        });

        return slides;
    };

    return {
        render: render
    };
}();