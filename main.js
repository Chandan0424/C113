tintColor="";

function setup(){
    Canvas=createCanvas(400,400);
    Canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    tint(tintColor);
    stroke("red");
    strokeWeight(20);
    rect(50,50,300,300);
    image(video,50,50,300,300);
    stroke("blue");
    fill("blue")
    circle(50,50,10);
    circle(350,50,10);
    circle(50,350,10);
    circle(350,350,10);
};

function applyFilter(){
    tintColor=document.getElementById("colorName").value;
};

function take_snapshot(){
    save('Selfie.png');
};