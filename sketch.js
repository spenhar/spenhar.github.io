var allMyFriends = {};
var r = 260; // radius of circle

function setup() {
  var canvas = createCanvas(1200, 400);
  frameRate(8);
  // line(0, 0, 1280, 400);
  // loadJSON("data.json", setupFriends);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('starfield');
};

function draw() {
  background(25); // or (R, G, B)

  for (var i=0; i<100; i++) {
    ellipse(Math.random() * 1280, Math.random() * 1000, 3, 3);
  };

  // line(0, 0, 1280, 400);
  for (var k in allMyFriends) {
    allMyFriends[k].render();
    // ellipse(allMyFriends[k].x, allMyFriends[k].y , 10, 10);
  }
  // console.log(allMyFriends);
  // background(Math.random() * 255, 200, 200);
};

function setupFriends(data) {
  var friendsData = data.friends.data;
  for (var i = 0; i<friendsData.length; i++) {
    var name = friendsData[i].name;
    var id = friendsData[i].id;
    if (friendsData[i].hasOwnProperty("mutualfriends")) {
      var mututalFriends = friendsData[i].mutualfriends.data;
    } else {
      var mututalFriends = [];
    }
    var theta = map(i, 0, friendsData.length, 0, TWO_PI);
    var x = width/2 + cos(theta) * r;   // try r as with/3 or something
    var y = height/2 + sin(theta) * r;
    // var x = Math.random() * width;
    // var y = Math.random() * height;
    var f = new Friend(name, id, x, y, theta, mututalFriends); // grabbing the i element of friends data array
    allMyFriends[id] = f;
  }
  for (var k in allMyFriends) {
    allMyFriends[k].connectToFriends();
  }
};
