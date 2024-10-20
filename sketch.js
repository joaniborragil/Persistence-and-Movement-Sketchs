let speed = 2; 

function setup() {
  createCanvas(600, 600);
  x = width / 2; 
  y = height / 2;
  size = 50;
  colorR = 100;//Red
  colorG = 150; //Green
  colorB = 200; //Blue
}

function draw() {
  background(100);

  x += speed;
  y += random(-speed,speed);

  colorR = (colorR + 1) % 255; 
  colorG = (colorG + 1) % 255;
  colorB = (colorB + 1) % 255;

  fill(colorR, colorG, colorB); 
  ellipse(x, y, size); // X, Y and size is defined as X= width/ 2, Y is height/2 and size is 50  



  //Rectangle at a random position 
  let randomSize = size / 2; //defined random size
  rect(random(width), random(height), randomSize, randomSize);
}
