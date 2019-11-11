function Pipe() {
this.top = random(height/2);
this.bottom = random(height/2);
this.x = width;
this.w = 20;
var speed = 2;
this.speed = speed;






this.highlight = false;
setInterval(function() {

    score++;

    
    

    

}, 2000)




// The more score you have the faster it goes.

this.speedUp = function() {
    if (score > 40) {
    speed = 4;
}
}

this.hits = function(bird) {
    if(bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
            this.highlight = true;
                score = 0;
                speed = 2;
            return true;
            
            
            
            
            
        }
        
    }
    this.highlight = false;
   return false
}

this.show = function() {
    fill(255,20,147);
    if (this.highlight) {
        fill(255,0,0);
    }
    rect(this.x, 0 , this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
}

this.update = function() {
    this.x -= this.speed;
}

this.offscreen = function() {
    if(this.x < -this.w) {
        return true;
    }else {
        return false;
    }
}
}