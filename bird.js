function Bird(){
    this.y = height/2;
    this.x = 25;

    this.gravity = 1;
    this.velocity = 0;
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    this.update = function() {


    }

}