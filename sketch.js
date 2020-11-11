
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
ball=new Ball(100,100,40)
ground=new Ground(600,390,1200,20)
	//Create the Bodies Here.
bin1=new Ground(450,342,20,150)
bin2=new Ground(500,368,100,20)
bin3=new Ground(550,342,20,150)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
  ball.display()
  ground.display()
  drawSprites();
 bin1.display()
 bin2.display()
 bin3.display()

}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-130})
	}
}

