var edges
var track,trackimg;
var lembo,lemboimg;
var cars,car1img,car2img,car3img,car4img;
var carsg

function preload(){
  trackimg = loadImage("track.jpg");
  lemboimg = loadImage("main car.png");
  car1img = loadImage("car1.png");
  car2img = loadImage("car2.png");
  car3img = loadImage("car3.png");
  car4img = loadImage("car4.png");
}
function setup() {
     createCanvas(1000,600);
      edges = createEdgeSprites();
    
    track = createSprite(500,300);
    track.addImage(trackimg);
    track.scale = 4;
    track.velocityY = 3;

    lembo  = createSprite(500,450);
    lembo.addImage(lemboimg);
    lembo.scale = 0.2;

    carsg = createGroup()
}
function draw() {
    background(0);
    lembo.bounceOff(edges);
    
    if(track.y > 450){
       track.y = track.width/2;
    }
    
    if(carsg.isTouching(lembo)){
      carsg.destroyEach();
      carsg.velocityY = 0;
      track.velocityY = 0;
      fill("red")
      text("GAME OVER",500,300)
    }

    if(keyDown(UP_ARROW)){
      lembo.y = lembo.y-5;
    }

    if(keyDown(DOWN_ARROW)){
      lembo.y = lembo.y+5;
    }

    if(keyDown(LEFT_ARROW)){
      lembo.x = lembo.x-10;
    }

    if(keyDown(RIGHT_ARROW)){
      lembo.x = lembo.x+10;
    }
    spawnCars();
    drawSprites();
}
function spawnCars(){
  if(frameCount%160 === 0){
    cars = createSprite(500,100);
    cars.velocityY = 8;
    cars.x = Math.round(random(350,650));
    var rand = Math.round(random(1,4));
    switch (rand) {
      case 1: cars.addImage(car1img);
        break;
      case 2: cars.addImage(car2img);
        break;
      case 3: cars.addImage(car3img);
        break;
      case 4: cars.addImage(car4img);
        break;
      default:
        break;
    }
    cars.scale = 0.2
    cars.lifetime = 130;
    carsg.add(cars);
  }
}