crud.template = function () {
    
    var render = function (destinationSelector, templateId, data) {
        var result = $('#' + templateId).render(data);
        var destinationContainer = $(destinationSelector).html('');
        destinationContainer.html(result);
    };
    
    return {
        render: render
    };    
}();