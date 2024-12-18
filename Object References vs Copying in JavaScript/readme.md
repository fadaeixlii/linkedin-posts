### **Object References vs Copying in JavaScript 🚀**

When working with JavaScript, understanding **how objects and primitives are stored and copied** is essential. Unlike primitives (e.g., `strings`, `numbers`, `booleans`), which are copied **“by value”**, objects are copied **“by reference”**. Let’s dive into the basics with examples to clear this up.

---

### **Primitives are copied as values 🔍**

```javascript
let message = "Hello!";
let phrase = message;

console.log(phrase); // "Hello!"
```

Here, `phrase` gets a completely **independent copy** of the string `message`. Changing one won’t affect the other.

---

### **Objects are copied by reference 💡**

```javascript
let user = { name: "John" };
let admin = user;

admin.name = "Pete";
console.log(user.name); // "Pete"
```

Why? Because `admin` and `user` point to the **same object** in memory. It’s like having two keys to the same cabinet: changes made using one key are visible to anyone using the other.

---

### **Comparison of objects 🧐**

Objects are equal **only** if they reference the same memory location:

```javascript
let a = {};
let b = a; // Same reference
console.log(a === b); // true

let c = {}; // Different object
console.log(a === c); // false
```

Even if `a` and `c` look identical, they are **different objects**.

---

### **`const` Objects can still change ⚠️**

Declaring an object with `const` **prevents reassignment**, but properties inside can still change:

```javascript
const user = { name: "John" };
user.name = "Pete";

console.log(user.name); // "Pete"
```

The `const` keyword locks the reference, not the object’s content.

---

### **Cloning objects 🧩**

1. **Shallow Cloning**: Use `Object.assign()` or the spread operator.

```javascript
let user = { name: "John", age: 30 };
let clone = { ...user };

console.log(clone); // { name: "John", age: 30 }
```

However, nested objects are still **copied by reference**.

2. **Deep Cloning**: Use `structuredClone` for a true copy of all nested objects.

```javascript
let user = {
  name: "John",
  sizes: { height: 182, width: 50 },
};

let clone = structuredClone(user);
clone.sizes.height = 190;

console.log(user.sizes.height); // 182
```

---

### **Key Takeaways 📝**

- Objects are copied by reference, not value.
- Shallow copies (`Object.assign` or spread `...`) don’t clone nested objects.
- Use `structuredClone` or libraries like `lodash` for **deep cloning**.

This understanding can save you hours of debugging and unexpected behavior in your code! 🛠️
