var R1;
var R2;
var R3;
var R4;
function setup() {
  createCanvas(800,400);
  R1 = createSprite(200, 300, 50, 50);
  R2 = createSprite(700,100,50,50);
  R3 = createSprite(700,300,50,50);
  R4 = createSprite(200,100,50,50);
  R2.velocityX= -5;
  R4.velocityX=5;
  R2.shapeColor = "green";
  R4.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  R1.x = World.mouseX;
  R1.y = World.mouseY;

 one(R1,R3);
 two(R2,R4);
 
  drawSprites();
}
function one(object1,object2){
 //algorithm1:finding out logic to check whether two rectangles are touching each other or not
 if(object1.x-object2.x<=(object1.width+object2.width)/2 &&
 object2.x-object1.x<=(object1.width+object2.width)/2 &&
 object1.y-object2.y<=(object1.height+object2.height)/2 &&
 object2.y-object1.y<=(object1.width+object2.width)/2
 ){
 object1.shapeColor = "red";
 object2.shapeColor = "yellow";

 }
 else {
   object1.shapeColor = "grey";
   object2.shapeColor = "grey";

 }
}

 function two(object1,object2){
 /*algorithm2: if 2 moving rectangles are touching each other 
  they should move in the opposite direction*/
 


  if(object1.x-object2.x<=(object1.width+object2.width)/2 &&
  object2.x-object1.x<=(object1.width+object2.width)/2 &&
  object1.y-object2.y<=(object1.height+object2.height)/2 &&
  object2.y-object1.y<=(object1.width+object2.width)/2
  ){
  
    object1.velocityX= (-1)*  object1.velocityX;
    object2.velocityX=(-1)*  object2.velocityX;
  }



 


}