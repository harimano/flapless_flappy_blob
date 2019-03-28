
var bird;
var pipes =[];
var score = 0;
// let song;

// function preload() {
    // var song = loadSound('assets/track.mp3');
    var audio = new Audio('assets/track.mp3');
    var sound = new Howl({
        src: ['assets/track.mp3'],
        volume: 0.5,
        onend: function () {
            alert('Finished!');
        }
        });
// }


function setup(){
    createCanvas(400, 600);
    sound.play()
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw(){
    background(0);


    for(var i = pipes.length-1; i>=0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            console.log("HIT")
        }

        if (pipes[i].offScreen()){
            pipes.splice(i,1);
        }
    }

    bird.update();
    bird.show();

    if( frameCount % 50 == 0){
        pipes.push(new Pipe());
    }
    
    

}


function keyPressed(){
     if(key == ' '){
         console.log("yeee");
        bird.up();
     }       
}