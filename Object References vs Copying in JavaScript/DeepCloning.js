let user = {
  name: "John",
  sizes: { height: 182, width: 50 },
};

let clone = structuredClone(user);
clone.sizes.height = 190;

console.log(user.sizes.height); // 182
