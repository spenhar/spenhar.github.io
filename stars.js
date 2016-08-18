function setup() {
  var canvas = createCanvas(800,600);
  canvas.position(width/2,height/2);
  canvas.class("stars")
  frameRate(4);
  canvas.parent('starfield');
};



function draw() {
  background(25); // or (R, G, B)
  ellipse(width/2, height/2, 100, 100);
  for (var i=0; i<100; i++) {
    ellipse(Math.random() * 1280, Math.random() * 1000, 3, 3);
  };
  for (var k in stars) {
    stars[k].render();
  }
};

var stars = {};
