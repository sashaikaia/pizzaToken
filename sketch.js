var radius = 200;
var crustRadius = 1.9*radius;
var sauceRadius = 1.8*radius;

function setup() {
  createCanvas(radius*2, radius*2);
  translate(200,200); 

  rectMode(CENTER);

  noLoop();
  background(155);
  drawCrust();
  drawSauce();
  drawCheese();

  drawTopping();
}


// function draw() {
// }


//pizza class
class pizza {

}

//draw a crust of random crust color yellow/brown
function drawCrust(){ 
  noStroke();
  fill(color('wheat'));
  circle(0, 0, crustRadius);

}
//sauce
function drawSauce(){
  noStroke();
  fill(color('tomato'));
  circle(0, 0, sauceRadius);
}

//random number of cheeses 1-3

//get that many cheese from cheese array
const cheeses = ["parmesan", "cheddar", "mozzarella", "ricotta", "romano", "provolone", "jack"];


function drawCheese(){
const random = Math.floor(Math.random() * cheeses.length);
console.log(random, cheeses[random]);

         for (i = 0; i < 250; i++) {
   mozzarella();
     }
  
   for (i = 0; i < 250; i++) {
   cheese();
     }
  
  }

function cheese(){
    noStroke();
    fill(color("yellow"));
    rotate(random(360));
    //random dispersion of cheese
    let a = random() * TWO_PI;
    let r = radius * .8 * sqrt(random());
    let x = r * cos(a);
    let y = r * sin(a);
    rect(x, y, 5, 25);
}
function mozzarella(){
    noStroke();
    fill(color("white"));
    rotate(random(360));
    //random dispersion of cheese
    let a = random() * TWO_PI;
    let r = radius * .8 * sqrt(random());
    let x = r * cos(a);
    let y = r * sin(a);
    ellipse(x, y, random(10, 30), random(10, 30));
}

//random number of toppings 0-7
const toppings = ["pepperoni", "sausage", "ham", "garlic", "onion", "basil", "pepper"];
//get that many toppings from topping array
function getTopping(){
const random = Math.floor(Math.random() * toppings.length);
console.log(random, toppings[random]);
}
function drawTopping(){
  getTopping();
}
