class Button {
  constructor(type) {
    this.type = type;
  }
  render = () => console.log(`${this.type} button rendered!`);
}

const buttonFactory = {
  createButton(type) {
    return new Button(type);
  },
};

const primaryButton = buttonFactory.createButton("primary");
primaryButton.render(); // Output: primary button rendered!
