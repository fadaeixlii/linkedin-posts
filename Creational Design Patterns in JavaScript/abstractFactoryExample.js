class LightThemeButton {
  render = () => console.log("Light theme button rendered!");
}
class DarkThemeButton {
  render = () => console.log("Dark theme button rendered!");
}

const themeFactory = {
  createButton(theme) {
    switch (theme) {
      case "light":
        return new LightThemeButton();
      case "dark":
        return new DarkThemeButton();
      default:
        throw new Error("Unknown theme");
    }
  },
};

const lightButton = themeFactory.createButton("light");
lightButton.render(); // Output: Light theme button rendered!
