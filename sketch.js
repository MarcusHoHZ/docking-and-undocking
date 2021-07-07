var spacebg, issImg,spacecraft,iss,sc1,sc2,sc3,sc4,scImg
var hasDocked = false

function preload() {
  bg = loadImage("Docking-undocking/spacebg.jpg")
  issImg = loadImage("Docking-undocking/iss.png")
  sc1 = loadImage("Docking-undocking/spacecraft1.png")
  sc2 = loadImage("Docking-undocking/spacecraft2.png")
  sc3 = loadImage("Docking-undocking/spacecraft3.png")
  sc4 = loadImage("Docking-undocking/spacecraft4.png")

}

function setup() {
  createCanvas(600,350);

  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 0.25
  spacecraft = createSprite(285,240)
  spacecraft.addImage(sc1)
  spacecraft.scale = 0.15
}

function draw() {
  background(bg);  

  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1)
  }

  if(keyDown("LEFT_ARROW")) {
    spacecraft.addImage(sc3)
    spacecraft.x = spacecraft.x - 2
  }

  if(keyDown("RIGHT_ARROW")) {
    spacecraft.addImage(sc4)
    spacecraft.x = spacecraft.x + 2
  }

  if(keyDown("UP_ARROW")) {
   
    spacecraft.y = spacecraft.y - 2
  }

  if(keyDown("DOWN_ARROW")) {
    spacecraft.addImage(sc2)
    spacecraft.y = spacecraft.y + 2
  }
  if(spacecraft.y <=(iss.y+70) && spacecraft.x <=(iss.x - 10)) {
    hasDocked = true
    textSize(25)
    fill("white")
    text("Docking Successful",200,300)
  } 
  
  drawSprites();
}