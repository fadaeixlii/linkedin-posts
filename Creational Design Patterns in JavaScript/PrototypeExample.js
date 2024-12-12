const vehiclePrototype = {
  start: () => console.log("Engine started!"),
};

const car = Object.create(vehiclePrototype);
car.type = "Car";
car.drive = () => console.log("Driving the car!");

console.log(car.type); // Output: Car
car.start(); // Output: Engine started!
car.drive(); // Output: Driving the car!
