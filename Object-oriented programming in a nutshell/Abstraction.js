class Animal {
  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
