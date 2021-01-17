
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var box1,box2,box3;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(800,700);
    engine = Engine.create();
	world = engine.world;
  box1 = new Box (650,630,200,20);
	box2 = new Box (560,590,20,100);
  box3 = new Box (740,590,20,100);
  paper = new Paper(100,350,40);	
  ground = new Ground(400,650,800,20);
  Engine.run(engine);
}


function draw() {
  background(0);
 box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  keyPressed();
  
  
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:-25});
  }
}



