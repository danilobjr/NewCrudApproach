crud.template = function () {
    
    var render = function (destinationSelector, templateId, data) {
        var result = $('#' + templateId).render(data);
        $(destinationSelector).html(result);
    };
    
    return {
        render: render
    };    
}();