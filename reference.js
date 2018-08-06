let input, button, greeting;

function setup() {
  createCanvas(600, 400);

  input = createInput();
  input.position(20,65);

  button = createButton('Submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

// function draw() {
//
// }

function greet() {
  let name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for(let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
