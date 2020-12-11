var width, height;
var img1, img2;
var Img1, Img2;
var img3, Img3;
var sprite1, Net1, Net2;
var test;
var database;
var x, y;

function preload()
{
  img1 = loadImage('Trashcan.png');
  img2 = loadImage('Mailbox.png');
  img3 = loadImage('Grass-Patch-20X20.png');
  img4 = loadImage('Walkway-Top.png');
}

function setup() 
{
  width = windowWidth;
  height = windowHeight;
  database = firebase.database();
  test = new Try();

  createCanvas(width, height);


  Img11 = createSprite(0, 0, 100, 100);
  Img11.addImage(img3);
  Img11.scale = 0.5;

  Img12 = createSprite(0, 0, 100, 100);
  Img12.addImage(img3);
  Img12.scale = 0.5;

  Img13 = createSprite(0, 0, 100, 100);
  Img13.addImage(img3);
  Img13.scale = 0.5;

  Img14 = createSprite(0, 0, 100, 100);
  Img14.addImage(img3);
  Img14.scale = 0.5;

  Img15 = createSprite(0, 0, 100, 100);
  Img15.addImage(img3);
  Img15.scale = 0.5;

  Img16 = createSprite(0, 0, 100, 100);
  Img16.addImage(img3);
  Img16.scale = 0.5;

  Img17 = createSprite(0, 0, 100, 100);
  Img17.addImage(img3);
  Img17.scale = 0.5;

  Img18 = createSprite(0, 0, 100, 100);
  Img18.addImage(img3);
  Img18.scale = 0.5;

  Img19 = createSprite(0, 0, 100, 100);
  Img19.addImage(img3);
  Img19.scale = 0.5;

  Img20 = createSprite(0, 0, 100, 100);
  Img20.addImage(img3);
  Img20.scale = 0.5;

  Img1 = createSprite(0, 0, 100, 100);
  Img1.addImage(img1);
  Img1.scale = 0.5;

  Img2 = createSprite(0, 0, 100, 100);
  Img2.addImage(img2);
  Img2.scale = 0.5;

  Img3 = createSprite(0, 0, 100, 100);
  Img3.addImage(img3);
  Img3.scale = 0.5;

  Img4 = createSprite(0, 0, 100, 100);
  Img4.addImage(img3);
  Img4.scale = 0.5;

  Img5 = createSprite(0, 0, 100, 100);
  Img5.addImage(img3);
  Img5.scale = 0.5;

  Img6 = createSprite(0, 0, 100, 100);
  Img6.addImage(img3);
  Img6.scale = 0.5;

  Img7 = createSprite(0, 0, 100, 100);
  Img7.addImage(img3);
  Img7.scale = 0.5;

  Img8 = createSprite(0, 0, 100, 100);
  Img8.addImage(img3);
  Img8.scale = 0.5;

  Img9 = createSprite(0, 0, 100, 100);
  Img9.addImage(img3);
  Img9.scale = 0.5;

  Img10 = createSprite(0, 0, 100, 100);
  Img10.addImage(img3);
  Img10.scale = 0.5;

  Img21 = createSprite(0, 0, 100, 100);
  Img21.addImage(img4);
  Img21.scale = 0.5;

  Img22 = createSprite(0, 0, 100, 100);
  Img22.addImage(img4);
  Img22.scale = 0.5;

  Img23 = createSprite(0, 0, 100, 100);
  Img23.addImage(img4);
  Img23.scale = 0.5;

  Img24 = createSprite(0, 0, 100, 100);
  Img24.addImage(img4);
  Img24.scale = 0.5;

  Img25 = createSprite(0, 0, 100, 100);
  Img25.addImage(img4);
  Img25.scale = 0.5;

  Img26 = createSprite(0, 0, 100, 100);
  Img26.addImage(img4);
  Img26.scale = 0.5;

  Img27 = createSprite(0, 0, 100, 100);
  Img27.addImage(img4);
  Img27.scale = 0.5;

  Img28 = createSprite(0, 0, 100, 100);
  Img28.addImage(img4);
  Img28.scale = 0.5;

  Img29 = createSprite(0, 0, 100, 100);
  Img29.addImage(img4);
  Img29.scale = 0.5;

  Img30 = createSprite(0, 0, 100, 100);
  Img30.addImage(img4);
  Img30.scale = 0.5;

  player = createSprite(width/2, height/2, 30, 30)

  // Img31 = createSprite(0, 0, 100, 100);
  // Img31.addImage(img4);
  // Img31.scale = 0.5;

  // Net1 = createSprite(0, 0, 25, 10);
  // Net2 = createSprite(0, 0, 100, 100);
}

function draw() 
{
  background('white'); 

  test.display();

  // Net1.x = Img1.x;
  // Net1.y = Img1.y + 20;

  Img1.x = x - 2000;
  Img1.y = y - 2000;
  
  // Net2.x = x - 2200;
  // Net2.y = y - 2200;

  Img2.x = x - 2040;
  Img2.y = y - 2007;
 
  Img3.x = x - 1963;
  Img3.y = y - 2010;

  Img4.x = x - 1923;
  Img4.y = y - 2010;

  Img5.x = x - 1883;
  Img5.y = y - 2010;

  Img6.x = x - 1843;
  Img6.y = y - 2010;

  Img7.x = x - 1803;
  Img7.y = y - 2010;

  Img8.x = x - 1763;
  Img8.y = y - 2010;

  Img9.x = x - 1723;
  Img9.y = y - 2010;

  Img10.x = x - 1683;
  Img10.y = y - 2010;

  Img11.x = x - 2041;
  Img11.y = y - 2049;

  Img12.x = x - 2001;
  Img12.y = y - 2049;

  Img13.x = x - 1961;
  Img13.y = y - 2049;

  Img14.x = x - 1921;
  Img14.y = y - 2049;

  Img15.x = x - 1881;
  Img15.y = y - 2049;

  Img16.x = x - 1841;
  Img16.y = y - 2049;

  Img17.x = x - 1801;
  Img17.y = y - 2049;

  Img18.x = x - 1761;
  Img18.y = y - 2049;

  Img19.x = x - 1721;
  Img19.y = y - 2049;

  Img20.x = x - 1681;
  Img20.y = y - 2049;

  Img21.x = x - 2040;
  Img21.y = y - 1970;

  Img22.x = x - 2000;
  Img22.y = y - 1970;

  Img23.x = x - 1960;
  Img23.y = y - 1970;

  Img24.x = x - 1920;
  Img24.y = y - 1970;

  Img25.x = x - 1880;
  Img25.y = y - 1970;

  Img26.x = x - 1840;
  Img26.y = y - 1970;

  Img27.x = x - 1800;
  Img27.y = y - 1970;

  Img28.x = x - 1760;
  Img28.y = y - 1970;

  Img29.x = x - 1720;
  Img29.y = y - 1970;

  Img30.x = x - 1680;
  Img30.y = y - 1970;

  // Img31.x = x - 1640;
  // Img31.y = y - 1970;
  
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

