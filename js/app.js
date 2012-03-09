$(function () {
 
    var drag = indexDrag();
    
    $('#chooser').on('dragstart', drag.start).on('dragend', drag.end);
    $('section').on('dragenter', drag.enter).on('dragleave', drag.leave);
    $('section > header').on('dragenter', drag.enter).on('dragleave', drag.leave);
});