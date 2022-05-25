function setup(){
    canvas=createCanvas( 900,900);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.hide();
   
}
function draw(){
    image(cam,300,350,300,300);
    fill("blue");
    circle(70,100,70);
    circle(800,100,70);
    circle(70,800,70);
    circle(800,800,70);
    fill("purple");
    rect(110,90,650,30);
    rect(110,780,650,30);
    rect(55,140,30,620);
    rect(785,140,30,620);

}