var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/red_star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	
	fairy = createSprite(130, 540);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;



	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  image(starImg,starBody.position.x, starBody.position.y, 50,50 );

  if(starBody.position.y >= fairy.y ){
  	// write code here to change the static property of the star.
	
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		//Write code here to move the fairy to the right
        fairy.x = fairy.x - 20;
	}
	
    if(keyCode === LEFT_ARROW){
		//Write code here to move the fairy to the left
        fairy.x = fairy.x + 20;
	}

	if (keyCode === DOWN_ARROW) {
		
		//Write code here to change the static property of the star. 
		// Delete any unnecessary code
		Matter.Body.setPosition(starBody,{x:random(0,800), y:20});
		
	}
}
