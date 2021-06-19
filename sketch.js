const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Pig1, box2, log1;
var Pig2, box3, box4, log2;
var box5, log3, log4;
var BirdWakeUp;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    Pig1 = new Pigs(810,350);
    Log1 = new Logs(810, 260, 300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Pig2 = new Pigs(810,220);
    Log2 = new Logs(810, 180, 300, PI/2);
    box5 = new Box(810,160,70,70);
    Log3 = new Logs(760, 120, 150, PI/7);
    Log4 = new Logs(870, 120, 150, -PI/7);
    BirdWakeUp = new Birds(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    Pig2.display();
    Log2.display();
    box3.display();
    box4.display();
    Log3.display();
    Log4.display();
    box5.display();
    BirdWakeUp.display();
}