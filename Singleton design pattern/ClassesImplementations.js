class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    Config.instance = this;
  }
  start() {
    console.log("App started");
  }
}
const appConfig = Object.freeze(new Config());
