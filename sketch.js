
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var stone;
var tree;
var mango1,mango2,mango3,mango4,mango5;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,100);

	boy = new Boy(stone.body,{x:400,y:350});

	tree = new Tree(700,700);

	mango1 = new Mango(400,400);
	mango2 = new Mango(200,200);
	mango3 = new Mango(300,300);
	mango4 = new Mango(500,500);
	mango5 = new Mango(600,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}


