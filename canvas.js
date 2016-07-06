function draw() {
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var w = myCanvas.width, h = myCanvas.height;
var i = 0;
do {
  ctx.fillStyle = "rgb(" 255","
                  + Math.round(255*Math.random()) + ","
                  + Math.round(255*Math.random()) + ")";
  ctx.beginPath();
  ctx.arc(w*Math.random(), h*Math.random(),
          10*Math.random(),
          0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
} while (++i != 1000);
}
  
