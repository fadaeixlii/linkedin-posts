const createCustomPizza = () => {
  const pizza = {};
  return {
    addCheese: () => {
      pizza.cheese = true;
      return this;
    },
    addPepperoni: () => {
      pizza.pepperoni = true;
      return this;
    },
    build: () => pizza,
  };
};

const myPizza = createCustomPizza().addCheese().addPepperoni().build();
console.log(myPizza); // Output: { cheese: true, pepperoni: true }
