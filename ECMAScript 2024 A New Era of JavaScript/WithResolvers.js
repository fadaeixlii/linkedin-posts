const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => {
  resolve("Task completed successfully!");
}, 1000);

promise.then(console.log); // Output: "Task completed successfully!"
