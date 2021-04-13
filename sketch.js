//creating the variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating the drop zone
var dzbase, dzleft, dzright;

//loading the images
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	
	//creating the canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	

	//creating the drop zone
	dzbase = createSprite(350, 637, 200, 20);
	dzleft = createSprite(260, 597, 20,100);
	dzright = createSprite(440,597,20,100);
	
	dzbase.shapeColor = "red";
	dzleft.shapeColor = "red";
	dzright.shapeColor = "red";

	//creating the package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating the helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the engine 
	engine = Engine.create();
	
	//creating the world
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//running the engine
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //setting the position of the package
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 


  //colliding the package with the drop zone
  packageSprite.collide(dzbase);
  packageSprite.collide(dzleft);
  packageSprite.collide(dzright);

  


  //creating the rectanngle  
  rect(ground.position.x, ground.position.y,width,10);
  
  //drawing the project
  drawSprites();
 
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
    
  }
}



