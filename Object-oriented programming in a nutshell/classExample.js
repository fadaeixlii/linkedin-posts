class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(`${this.brand} ${this.model} is starting.`);
  }
}
