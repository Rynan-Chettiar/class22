const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var myengine,myworld,myground;
var ball; 

function setup() 
{ 
  createCanvas(800,400); 
  myengine=Engine.create(); 
  myworld=myengine.world; 
  var options= 
  { isStatic : true } 
  myground=Bodies.rectangle(400,380,800,50,options);
   World.add(myworld,myground); 
   // console.log(myobject);

   var balloptions=
   {
     restitution : 1.0
   }
   
   ball= Bodies.circle(400, 50, 20, balloptions)
   World.add(myworld, ball);
} 
   
function draw() 
{ 
  background(0); 
  Engine.update(myengine); 
  rectMode(CENTER) ; 
  fill("brown")
  rect(myground.position.x,myground.position.y,800,50)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20)
}