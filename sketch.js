var bob1,ground1,rope1,box1,box2,box3,box4,box5,box6,box7,box8,box9
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var score=0

function setup() {
	createCanvas(500, 500);
	engine = Engine.create();
	world = engine.world;

	bob1=new ball(50,340,40)
	ground1=new platform()
    rope1=new SlingShot(bob1.body,{x:50,y:100})
    box1=new box(200,200,50,50)
    box2=new box(250,200,50,50)
    box3=new box(300,200,50,50)
    box4=new box(350,200,50,50)
    box5=new box(400,200,50,50)
    box6=new box(250,250,50,50)
    box7=new box(300,250,50,50)
    box8=new box(350,250,50,50)
    box9=new box(300,300,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  box9.display()
  box8.display()
  box7.display()
  box6.display()
  box5.display()
  box4.display()
  box3.display()
  box2.display()
  bob1.display()
  ground1.display()
  rope1.display()
  box1.display()
  drawSprites();
 
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    //}
}
