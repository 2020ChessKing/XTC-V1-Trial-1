var width, height;
var img1, img2;
var Img1, Img2;
var sprite1, Net1, Net2;
var test;
var database;
var x, y;

function preload()
{
  img1 = loadImage('Trashcan.png')
  img2 = loadImage('Mailbox.png')
}

function setup() 
{
  width = windowWidth;
  height = windowHeight;
  database = firebase.database();
  test = new Try();

  createCanvas(width, height);

  player = createSprite(width/2, height/2, 30, 30)

  Img1 = createSprite(0, 0, 100, 100);
  Img1.addImage(img1);
  Img1.scale = 0.5;

  Img2 = createSprite(0, 0, 100, 100);
  Img2.addImage(img2);
  Img2.scale = 0.5;

  // Net1 = createSprite(0, 0, 25, 10);
  // Net2 = createSprite(0, 0, 100, 100);
}

function draw() 
{
  background('green'); 

  test.display();

  // Net1.x = Img1.x;
  // Net1.y = Img1.y + 20;

  Img1.x = x - 2000;
  Img1.y = y - 2000;
  
  // Net2.x = x - 2200;
  // Net2.y = y - 2200;

  Img2.x = x - 2050;
  Img2.y = y - 2020;
  
  if(keyIsDown(UP_ARROW))
  {
    y += 5;

  }

  if(keyIsDown(DOWN_ARROW))
  {
    y -= 5;

  }

  if(keyIsDown(RIGHT_ARROW))
  {
    x -= 5;

  }

  if(keyIsDown(LEFT_ARROW))
  {
    x += 5;

  }

  setTimeout(function()
  {
    test.update();
 }, 1500) 

  fill('#F00');
  text(x, width/2, 100);
  text(y, width/2, 150);

  drawSprites();
}

