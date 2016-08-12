var stars = {};

function setup() {
  var canvas = createCanvas(1280, 400);
  frameRate(4);
  canvas.parent('starfield');
};

function draw() {
  background(25); // or (R, G, B)

  for (var i=0; i<100; i++) {
    ellipse(Math.random() * 1280, Math.random() * 1000, 3, 3);
  };
  for (var k in stars) {
    stars[k].render();
  }
};
