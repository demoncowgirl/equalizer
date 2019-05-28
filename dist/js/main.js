var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

// image getElement
var img = document.createElement('IMG');
// draw image onload
img.onload=draw;

// draw rectangle mask
function draw() {

      // saves state so clipping can be undone
      ctx.save();

      // create a rectangle
      ctx.beginPath();
      ctx.rect(0, 0, 100, 800, false);

      // clip to the current path
      ctx.clip();

      ctx.drawImage(img);

      // undo clipping
      ctx.restore();
}

function animate(){
  for(var x=0; x < 1630; x++;)
  ctx.drawImage(img, x, 0);
  }

  requestAnimationFrame(animate);

}


//image source
img.src = "../images/equalizer-vector.png";
