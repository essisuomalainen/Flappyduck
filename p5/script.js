var bird;
var pipes = [];
var score= 0;
var coins = [];
var duck;





function preload() {
    duck = loadImage("assets/winnermoustache1.png");
    bamboo = loadImage("assets/razor.png");
    gamebg = loadImage("assets/gamebackground.png");
}



function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    bird = new bird();
    pipes.push(new Pipe());
   

    
    
    
}


function draw() {
   background(gamebg);
    
   for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
        console.log('hit')
    }

    if(pipes[i].offscreen()) {
        pipes.splice(i,1)
    }
}
   bird.update();
   bird.show();


   if (frameCount % 100 == 0) {
       pipes.push(new Pipe());
   }



  textAlign(CENTER);
  drawWords(width * 0.5);


   
}

function keyPressed() {
    if (key == ' ') {
        bird.up()
    }
}



function drawWords(x) {
  fill(0);
  

  fill(255);
  text('Score: ' + score, x, 330);


}


