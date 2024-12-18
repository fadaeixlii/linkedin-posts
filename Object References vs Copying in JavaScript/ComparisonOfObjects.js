let a = {};
let b = a; // Same reference
console.log(a === b); // true

let c = {}; // Different object
console.log(a === c); // false
