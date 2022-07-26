'use strict';

class Pizza {
  constructor(size, type) {
    this.size = size;
    this.type = type;
    this.extra = [];
  }

  addExtraIngredient(ingredient) {
    return this.extra.push(ingredient);
  }

  removeExtraIngredient(ingredient) {
    let position = this.extra.indexOf(ingredient);
    if (~position) {
      this.extra.splice(position, 1);
    }
  }

  getSize() {
    return this.size;
  }

  getPrice() {
    let arrExtra = [];
    this.extra.forEach((ext) => {
      arrExtra.push(ext.price);
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let extra = arrExtra.reduce(reducer);

    return this.size.price + this.type.price + extra;
  }

  getExtraIngredients() {
    return this.extra;
  }

  getPizzaInfo() {
    let arrIngredient = [];
    this.extra.forEach((ingr) => {
      arrIngredient.push(ingr.extra);
    });

    return `Size: ${this.size.size}
Type: ${this.type.type}
Extra ingredients: ${arrIngredient}
Price: ${this.getPrice()} UAH`;
  }
}

class PizzaException {
  constructor() {
    this.log = [];
  }

  setError(info) {
    this.log.push(info)
    return console.error(this.log);
  }
}

Pizza.SIZE_S = { size: 'SMALL', price: 50 };
Pizza.SIZE_M = { size: 'MEDIUM', price: 75 };
Pizza.SIZE_L = { size: 'LARGE', price: 100 };

Pizza.TYPE_VEGGIE = { type: 'VEGGIE', price: 50 };
Pizza.TYPE_MARGHERITA = { type: 'MARGHERITA', price: 60 };
Pizza.TYPE_PEPPERONI = { type: 'PEPPERONI', price: 70 };

Pizza.EXTRA_TOMATOES = { extra: 'TOMATOES', price: 5 };
Pizza.EXTRA_CHEESE = { extra: 'CHEESE', price: 7 };
Pizza.EXTRA_MEAT = { extra: 'MEAT', price: 9 };

Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L]
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI]
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT]

PizzaException.message1 = { log: 'Reguared two arguments, given: 1' }
PizzaException.message2 = { log: 'Invalid type' }
PizzaException.message3 = { log: 'Duplicate ingredient' }
PizzaException.message4 = { log: 'Invalid ingredient' }

let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// add extra meat
pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// check price
console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 107 UAH
// add extra corn
pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// add extra corn
pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// check price
console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 119 UAH
// check pizza size
console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L}`); //=> Is pizza large: false
// remove extra ingredient
pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.


// examples of errors
// let pizza = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1
//let pizza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type
//  let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient
// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Invalid ingredient

const two = 2;

if (pizza.size === undefined || pizza.type === undefined) {
  let message = new PizzaException(PizzaException.message1);
  console.error(message.__proto__.constructor.message1);
  message.setError(message.__proto__.constructor.message1)
}

if (pizza.type !== (Pizza.allowedTypes[0] || Pizza.allowedTypes[1] || Pizza.allowedTypes[two])) {
  let message = new PizzaException(PizzaException.message2);
  console.error(message.__proto__.constructor.message2);
  message.setError(message.__proto__.constructor.message2)
}

if (pizza.extra.length > 1 && pizza.extra[0] === pizza.extra[1] || pizza.extra[two]) {
  let message = new PizzaException(PizzaException.message3);
  console.error(message.__proto__.constructor.message3);
  message.setError(message.__proto__.constructor.message3)
}

if (Pizza.allowedExtraIngredients[two] === pizza.extra[0] || pizza.extra[1] || pizza.extra[two]) {
  let message = new PizzaException(PizzaException.message4);
  console.error(message.__proto__.constructor.message4);
  message.setError(message.__proto__.constructor.message4)
}