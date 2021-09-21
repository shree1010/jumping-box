var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
  surface1=createSprite(100,600,200,50) ; 
  surface2=createSprite(310,600,200,50);
  surface3=createSprite(520,600,200,50);
  surface4=createSprite(730,600,200,50);
surface1.shapeColor="red";
surface2.shapeColor="purple";
surface3.shapeColor="orange";
surface4.shapeColor="blue";
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white";
ball.velocityX=4;
ball.velocityY=4;
    //create box sprite and give velocity

}
 
function draw() {
    
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges=createEdgeSprites();

    //add condition to check if box touching surface and make it box
    
    ball.bounceOff(edges);
    if(surface1.isTouching(ball)&ball.bounceOff(surface1)){
        ball.shapeColor="red"
        music.play();
    }
    if(surface2.isTouching(ball)&ball.bounceOff(surface2)){
        ball.shapeColor="purple"
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
        
    }
    if(surface3.isTouching(ball)&ball.bounceOff(surface3)){
        ball.shapeColor="orange"
        
    }
    if(surface4.isTouching(ball)&ball.bounceOff(surface4)){
        ball.shapeColor="blue"
        
    }
    drawSprites();
}

