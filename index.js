function setup() {
  createCanvas(800, 800);
  loop();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var ident = 0;
function draw() {
	//background('white');
	var randomHexColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	if (mouseIsPressed) {
    	fill(randomHexColor);
    	ident = getRandomInt(3);
  } else {
    	fill('#ffff00');
  }
  var _r_ = getRandomInt(100);
	if(ident == 0){
  		ellipse(mouseX, mouseY, _r_, _r_);
  	}
  	else if(ident == 1){
 		triangle(mouseX, mouseY-_r_, mouseX-_r_, mouseY+_r_, mouseX+_r_, mouseY+_r_);
 	}
 	else{
 		rect(mouseX-(_r_/2), mouseY-(_r_/2), _r_, _r_);
 	}
}

function mouseMoved(){
	redraw();
}

