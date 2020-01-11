window.onload = function() {
    var frame = document.getElementById('panel');
    var width = 960;
    var heigth = 570;

    frame.setAttribute('width', width);
    frame.setAttribute('height', heigth);

    var ctx = frame.getContext('2d');

    var drawing = false;

    frame.onmouseup = function() {
        drawing = false;
    }

    frame.onmousedown = function(evt) {
        ctx.moveTo(evt.clientX, evt.clientY);
        drawing = true;
    }

    frame.onmousemove = function(evt) {
        if (drawing) {
            ctx.lineTo(evt.clientX, evt.clientY);
            ctx.stroke();
        }
    }
}