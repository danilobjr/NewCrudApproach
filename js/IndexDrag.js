var indexDrag = function () {

    var start = function (e) {
        this.style.opacity = 0.1;
    };

    var enter = function (e) {
        e.currentTarget.classList.add('over');
        console.log('ENTER: e.target: , ' + e.target.localName + '. e.currentTarget: ' + e.currentTarget.localName);
    };

    var leave = function (e) {
        e.target.classList.remove('over');
        console.log('LEAVE: e.target: , ' + e.target.localName + '. e.currentTarget: ' + e.currentTarget.localName);
    };

    var end = function (e) {
        this.style.opacity = 1;
    };

    return {
        start: start,
        enter: enter,
        leave: leave,
        end: end
    };
    
};