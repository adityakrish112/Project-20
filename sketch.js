var car, wall;
var speed = random(10, 100);
var weight = random(400, 1500);
var safety;
var deformation = 0.5 * weight * speed * speed / 22500;

function setup() {
  createCanvas(800,400);
   car = createSprite(50, 200, 50, 50);
   car.shapeColor = ("white");

   wall = createSprite(750, 200, 60, height/2);
   wall.shapeColor =color("grey");


}

function draw() {
  background("black");  

  car.velocityX = speed;
  car.collide(wall);
  if(wall.x - car.x < (car.width + wall.width)/2){

    

  }

  if(deformation > 180){

   car.shapeColor = color("red");

  } else if(deformation < 180 && deformation > 80){

    car.shapeColor = color("yellow");

  } else if(deformation < 80){

    car.shapeColor = color("green");

  }

  drawSprites();

  text("Deformation: " + deformation, 400, 50)
}
