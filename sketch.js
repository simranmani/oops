function setup() {
  createCanvas(600, 600);
  background (247,247,247)
}
let dia =100
function draw() {
  background(160, 222, 242);
  circle(0, height/2, dia)
  dia=dia+0.8
  fill(255, 168, 168)
  noStroke()
  rect(20,40,50)
  
}

function mousePressed (){
  //start stop animation loop
  if (isLooping()){
    noLoop() 
  }else {
    loop()
  }
}
  
