crud.views.users = function () {

    var template = crud.template;

    var render = function (users) {
        template.render('#users .content', 'usersTemplate', users);
    };

    return {
        render: render
    };
}();