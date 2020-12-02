var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(500,400);
tower = createSprite(250,200,500,400)
 tower.addImage(towerImg)
  tower.scale = 0.9
  tower.velocityY = 5
  ghost = createSprite(250,200,20,10)
  ghost.addImage(ghostImg)
  ghost.scale = 0.3
  doorsGroup = new Group()
  climberGroup = new  Group()
  invisiableGroup = new Group()
   
}

function draw(){
  background(0);
  if(gameState==="play"){
  if(tower.y>400){
    tower.y = 300
  }
  if(keyDown("space")){
    ghost.velocityY =-3 
  }
  ghost.velocityY = ghost.velocityY+0.8
  
  if(keyDown("left")){
    ghost.x = ghost.x-3
  }
   if(keyDown("right")){
    ghost.x = ghost.x+3
  }
  spawnDoors()
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  if(invisiableGroup.isTouching(ghost)){
    gameState="end"
  }
    
  drawSprites()
  }
else if(gameState==="end"){
  textSize(20)
  fill("blue")
  text("GAME OVER",200,200)
}
}

function spawnDoors() {
  //write code here to spawn the doors in the tower
    if(frameCount % 100 === 0){
      doors = createSprite(20,100,2,10)
      doors.addImage(doorImg)
      doors.x = Math.round(random(100,350))
      doors.velocityY = +3
      doors.lifetime = 80
      doorsGroup.add(doors)
      ghost.depth = doors.depth
      ghost.depth+=1
      climber = createSprite(20,170,60,30)
      climber.addImage(climberImg)
      climber.x = doors.x
      climber.velocityY = +3
      climber.lifetime = 80
      climberGroup.add(climber)
      invisiable = createSprite(20,170,climber.width,5)
      invisiable.x = climber.x
      invisiable.velocityY = +3
      invisiable.visible = true
      invisiable.lifetime = 80
      invisiable.debug=true
      invisiableGroup.add(invisiable)
      
  }
    
}

