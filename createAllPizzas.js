//1-3
const allCheeses = ["parmesan", "cheddar", "mozzarella", "ricotta", "romano", "provolone", "jack"];
//toppings, 0-7
const allToppings = ["pepperoni", "sausage", "ham", "garlic", "onion", "basil", "pepper"];
//crusts 1
const allCrusts = ["thin", "thick", "whole wheat", "gluten-free"]

const sauce = [true, false]

//output array
const output = []

class Pizza {
  constructor(cheeses, sauce, toppings, crust, name) {
    this.cheeses = cheeses;
    this.sauce = sauce;
    this.toppings = toppings;
    this.crust = crust;
    this.name = name;
  }
}

function makeAllPizzas(){
  

}