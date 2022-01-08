//Global Variable declared at top
var box;

//Predefined function that runs once 
function setup() {
  createCanvas(400,400);

  box = createSprite(200, 200, 50, 50);
  box.shapeColor = "blue";
}

//Predefined Function that runs continusly
function draw() 
{
  background(225, 200, 60);

  if(keyDown("right")){
      box.x+=1;
  }

  if(keyDown("left")){
    box.x-=1;
  }

  if(keyDown("up")){
    box.y-=1;
  }

  if(keyDown("down")){
    box.y+=1;
  }

  drawSprites();
}

//Hyper Text Markup Language
//cascading style sheets

//Inside two <script></script> tags, we can tell the computer to load any JavaScript code.
//Inside two <body></body> tags, we tell the computer what to display on the page.
//Inside two <head></head> tags, we tell the computer all the other files used in the code.

//Boolean True and False
//All Datatypes for JavaScript Strings, Numbers,Boolean, Null, Undefined

