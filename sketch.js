var sprite;

function setup(){
  createCanvas(500,500);

  sprite = createSprite(250,250,20,20);
  sprite.shapeColor = "red";
}

function draw(){
  background("white");

  if(keyDown("right")){
    sprite.x +=5;
  }

  if(keyDown("left")){
    sprite.x -=5;
  }
  
  if(keyDown("up")){
    sprite.y -=5;
  }

  if(keyDown("down")){
    sprite.y +=5;
  }

  drawSprites();
  
}
