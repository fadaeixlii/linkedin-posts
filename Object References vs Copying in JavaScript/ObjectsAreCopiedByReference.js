let user = { name: "John" };
let admin = user;

admin.name = "Pete";
console.log(user.name); // "Pete"
