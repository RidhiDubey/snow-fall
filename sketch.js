const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;

var snowCount=1;
var snow=[];
var world,engine;


function preload(){
  bg=loadImage("snow1.jpg");
  
}

function setup() {
  
    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(800,800);


    if(frameCount%100===0){

      for(var i=0;i<800;i++){
      snow.push(new Snow(random(0,800),random(0,800)));
    }
    }
    
}

function draw() {
  background(bg);  

  Engine.update(engine);
  

  for(var i=0;i<800;i++){
    snow[i].display();
    snow[i].update();
  }
}