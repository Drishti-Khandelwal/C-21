
//INSTRUCTION 1
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

   //INSTRUCTION 2
   
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