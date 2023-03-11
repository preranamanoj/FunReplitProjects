//originally for codespire 

let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));//pulling random colours from the colour list that we defined above 
  ellipse(mouseX, mouseY, 25, 25); //width and height of the ellipse (the circle)- Mouse x and y represent those two factors 
}
