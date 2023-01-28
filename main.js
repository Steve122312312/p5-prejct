

    function preload(){

    }
    function setup(){
        canvas = createCanvas(500,500)
    canvas.center()
    
    video = createCapture(VIDEO)
    video.hide()
    ellipse(56, 46, 55, 55);
    ellipse(450, 46, 55, 55);
    ellipse(56, 450, 55, 55);
    ellipse(450, 450, 55, 55);
    
        
    }
    function draw(){
        image(video,150,150,200,200)
        
    }

    function takeSnapshot(){
        save(jpg)
    }