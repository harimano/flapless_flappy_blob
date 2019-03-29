
function Pipe(){
    this.top =random(height/2);
    this.bottom = random(height/2);
    this.x = width; 
    this.w = 20;
    this.speed = 7;

    this.hightlight = false;

    this.hits = function(bird){
        if(bird.y < this.top || bird.y >height -this.bottom ){
            if(bird.x > this.x && bird.x <this.x +this.w){
                this.hightlight = true;
                highscore.push(score);
                const scoreDiv2 = document.getElementById('highscore');
                scoreDiv2.innerText = Math.max(...highscore); 
                score = 0;
                console.log(score);

                return true;  
            }
        }
        score+= 1;
        console.log(score);
        this.hightlight =false;
        const scoreDiv = document.getElementById('score');
        scoreDiv.innerText = score; 
        return false;
    }
    
    this.show = function(){
        fill(255);
        if(this.hightlight){
            fill(255,0,0)
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom); 
        
    }


    this.update = function(){
        this.x -= this.speed;
    }

    this.offScreen = function(){
        if(this.x < - this.w ){
            return true;
        } 
        else{
            return false;
        }
    }







}