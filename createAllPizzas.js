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
  //get all permutations of cheeses
  // console.log(allCheeses)
  let permCheeses = []
  for(let i = 1; i<=3;i++){
    permCheeses.push(...allCheeses.permutation(i))
  }
  //toppings
  let permToppings = []
  for(let i = 0; i<=7;i++){
    permToppings.push(...allToppings.permutation(i))
  }

  //multiply above together -> array of all possible 'topCombos'
  let topCombos = []
  //permCheeses.forEach((cheese) => permToppings.forEach((top) => topCombos.push(...[cheese.push(...top)])))
  for(let cheese of permCheeses){
    for(let top of permToppings){
      topCombos.push(cheese.concat(top))
    }
  }
  console.log(topCombos)
  //1 topCombos forEach crust -> toBeSauced

  //1 w/ sauce, 1 w/o -> readyForTheOven(output)

}

makeAllPizzas();