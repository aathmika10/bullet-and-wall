var wall,thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="yellow" 

bullet=createSprite(50,200,20,10);
bullet.velocityX=speed;
bullet.shapeColor="white";
}

function draw() {
  background(0); 
  
 if(collide(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);
  if(damage>10)
  {
    wall.shapeColor="red"
  }
  if(damage<10)
  {
    wall.shapeColor="green"
  }
}
  drawSprites();
}

function collide(ebullet,ewall)
{  bulletRightEdge=ebullet.x+ebullet.width;
wallLeftEdge=ewall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}