const Config = {
  start: () => console.log("App started"),
  update: () => console.log("App updated"),
};
Object.freeze(Config);
Config.start(); // "App started"
Config.newProp = "test"; // Fails silently
console.log(Config); // { start: [Function], update: [Function] }
