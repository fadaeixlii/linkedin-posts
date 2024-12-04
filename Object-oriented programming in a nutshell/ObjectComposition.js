const canDrive = {
  drive() {
    console.log("Driving!");
  },
};

const canFly = {
  fly() {
    console.log("Flying!");
  },
};

const FlyingCar = Object.assign({}, canDrive, canFly);
FlyingCar.drive();
FlyingCar.fly();
