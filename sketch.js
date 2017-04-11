var y = 100;
var x = 255;
var habits = ['Pretty sure I failed at life right now...yay....', 'send help pwease'];

alert(habits[0]);
alert(habits[1]);


function setup(){
  createCanvas(600,400);
}

function draw(){
  background(110, 112, 117);
  circle();
  eye();
}

function circle(){
    stroke(15);
    fill(192,192,192);
    ellipse(x,y,100,100);
}

function eye(){
    noStroke();
    fill(0,128,0);
    ellipse(x-2,y+2,25,25);
}

function long(){
    while(x < 600){
    noStroke();
    fill(0, 255, 17);
    rect(mouseX,mouseY,400,400);
    }
}

