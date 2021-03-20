
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone, rubber;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stone= new Stone(700,320,70,70);
    rubber = new Rubber(920,320,70,70);
    ground = new Ground(600,height,1200,20);
   hammer= new Hammer(100,100);
}


function draw(){
    background(0);
    Engine.update(engine);
    stone.display();
    rubber.display();
    ground.display();
    hammer.display();
}