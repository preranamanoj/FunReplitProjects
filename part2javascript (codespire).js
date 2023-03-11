let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(1000, 1000); //just need a LOT of space
  background(100);
  bgImg  = loadImage("robot.jpg") //bgImg is backgroud image and I've 'added it here' and applied in under the draw function 
}

function draw() {
    image(bgImg, 0, 0, width, height); //coordinates and adjusting width and height based on canvas
    fill('pink');
    textFont("sans-serif");
    textSize(100);
    textAlign(CENTER); //alighning the text so that it is visible 
    textStyle(BOLD); //a possible function for bolding the text
   textStyle(ITALIC); //a possible function for italicizing the text
    stroke('purple'); //the border colour 
    strokeWeight(1); //controls the thickness of the border colour 
    text("Prerana", 200, 150);
  fill('lightblue');
    textFont("sans-serif");
    textSize(100);
    textAlign(CENTER); //alighning the text so that it is visible 
    textStyle(BOLD); //a possible function for bolding the text
   textStyle(ITALIC); //a possible function for italicizing the text
    stroke('gold'); //the border colour 
    strokeWeight(1); //controls the thickness of the border colour 
    text("Manoj", 250, 250);
  
}
