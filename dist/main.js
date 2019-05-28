var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

// image getElement
var img = document.createElement('IMG');

// draw image onload
img.onload = function() {

      // saves state so clipping can be undone
      ctx.save();

      // create a rectangle
      ctx.beginPath();
      ctx.rect(0, 0, 100, 800, false);

      // clip to the current path
      ctx.clip();

      ctx.drawImage(img, 0, 0);

      // undo clipping
      ctx.restore();

}

//image source
img.src = "../images/equalizer-vector.png";
