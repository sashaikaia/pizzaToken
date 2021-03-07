//permutation generator
(() => {
  var generatePermutation = function (perm, pre, post, n) {
    var elem, i, rest, len;
    if (n > 0)
      for (i = 0, len = post.length; i < len; ++i) {
        rest = post.slice(0);
        elem = rest.splice(i, 1);
        generatePermutation(perm, pre.concat(elem), rest, n - 1);
      }

    else
      perm.push(pre);
  };

  /*
  extend Array.prototype
  e.g. [0, 1, 2].permutation(2)
  => [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]]
  */
  Array.prototype.permutation = function (n) {
    if (n == null)
      n = this.length;
    var perm = [];
    generatePermutation(perm, [], this, n);
    return perm;
  };
})();
//1-3
const cheeseKey = {a: "parmesan", b: "cheddar", c: "mozzarella", d:"ricotta", e:"romano", f: "provolone", g: "jack"}
const allCheeses = ["parmesan", "cheddar", "mozzarella", "ricotta", "romano","provolone","jack"]
//toppings, 0-7
const allToppings = ["pepperoni", "sausage", "ham", "garlic", "onion", "basil", "pepper"];
//crusts 1
const crusts = ["thin", "thick", "whole wheat", "gluten-free"]

const sauce = [true, false]

let permCheeses = []
for(let i = 1; i<=3;i++){
    let cheeseObj={};
    permCheeses.push(...allCheeses.permutation(i))
}
//toppings
let permToppings = []
for(let i = 0; i<=7;i++){
  permToppings.push(...allToppings.permutation(i))
}

//output array
const output = []

class Pizza {
  constructor(pizza) {
    this.pizza.cheeses = cheeses;
    this.pizza.sauce = sauce;
    this.pizza.toppings = toppings;
    this.pizza.crust = crust;
  }
}


function makeAllPizzas(){
  let allPizzas = [];
  for(let cheese of permCheeses){
    let thisPizza={};
    thisPizza.cheese = cheese;
    for(let topping of permToppings){
      thisPizza.topping = topping
      for(let crust of crusts){
        thisPizza.crust = crust
        for(let sauceBool of sauce){
          thisPizza.sauce = sauceBool
        }
      }
    }
    allPizzas.push(thisPizza)
  }
console.log(allPizzas)
}

makeAllPizzas();