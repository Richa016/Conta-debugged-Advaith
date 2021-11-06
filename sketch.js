var bg;
var runner;
var invisibleGround;
var obstaclesGroup, alien1, alien2, alien3, alien4, alien5, alien6;

var gameOver, restart;

var score = 0;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

function preload() {
  runnerImage = loadImage('contra.png');
  bgImage = loadImage('background.png');
  groundImage = loadImage('ground.jpeg');
  alien1 = loadImage('alien1.png');
  alien2 = loadImage('alien2.png');
  alien3 = loadImage('alien3.png');
  alien4 = loadImage('alien5.png');
  alien5 = loadImage('alien6.png');
}

function setup() {
  createCanvas(1500, 880);
  bg = createSprite(750, 500, 1500, 750);
  bg.addImage(bgImage);
  bg.scale = 0.70;
  bg.velocityX=-10

  runner = createSprite(100, 575, 10, 40);
  runner.addImage(runnerImage);
  runner.scale = 0.45;

  invisibleGround = createSprite(100, 635, 3000, 40);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();

  //ground = createSprite(200, 180, 400, 20);
 

  score = 0;
}

function draw() {
  background(0);

  fill('red');
  textSize(50);
  text('Score: ' + score, 10, 50);

  console.log(score);

  bg.velocityX = -10

  runner.collide(invisibleGround);

  //this.resetButton.position(displayWidth/2 - 60, displayHeight/2);
  if (gameState === PLAY) {
    score = score + Math.round(getFrameRate() / 60);
    //ground.velocityX = -(6 + (3 * score) / 100);

   if (bg.x < 0) {
      bg.x = 750
    }
  
    //bg.velocityX = -2;

    if (keyDown('space') && runner.y >= 159) {
      runner.velocityY = -12;
    }

    runner.velocityY = runner.velocityY + 0.8;

    spawnObstacles();
  }

  drawSprites();
}
function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1000, 575, 10, 40);
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    obstacle.scale = 0.45;

    //generate random obstacles
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(alien1);
        break;
      case 2:
        obstacle.addImage(alien2);
        break;
      case 3:
        obstacle.addImage(alien3);
        break;
      case 4:
        obstacle.addImage(alien4);
        break;
      case 5:
        obstacle.addImage(alien5);
        break;
      default:
        break;
    }
  }
}
