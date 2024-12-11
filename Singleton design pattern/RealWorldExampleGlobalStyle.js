let instance;
class GlobalStyle {
  constructor() {
    if (instance) throw new Error("Cannot create multiple instances");
    instance = this;
    this.styles = { color: "black" };
  }
  getStyle(key) {
    return this.styles[key];
  }
  setStyle(key, value) {
    this.styles[key] = value;
  }
}
const styleManager = Object.freeze(new GlobalStyle());
