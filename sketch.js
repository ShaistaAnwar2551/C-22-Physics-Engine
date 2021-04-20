const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var GROUND;
var ball;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
  GROUND = Bodies.rectangle(400, 790, 800, 10,options);
World.add(myworld,GROUND);
//console.log(GROUND);

var balloptions = {
  restitution: 0.5

}
 ball = Bodies.circle(400, 100, 20,balloptions);
 World.add(myworld,ball)
console.log(ball)
Engine.run(myengine);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(GROUND.position.x,GROUND.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  //drawSprites();
}