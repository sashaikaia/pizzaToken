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
function cartesian(...args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}
//1-3
const allCheeses = ["parmesan", "cheddar", "mozzarella", "ricotta"]
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
  constructor([cheese, topping, crust, sauce]) {
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = topping;
  }
}


function makeAllPizzas(){
  let bakedPizzas = []; 
  for (let pizza of readyToBake){
    let newPizza = new Pizza(pizza)
    bakedPizzas.push(newPizza)
  }
  console.log(bakedPizzas)
}

let readyToBake = cartesian(permCheeses, permToppings, crusts, sauce)
makeAllPizzas()