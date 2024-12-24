// Shared memory buffer and Int32Array
const sharedBuffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(sharedBuffer);

// Worker thread
Atomics.waitAsync(sharedArray, 0, 0).then(() => {
  console.log("The value has changed!");
});

// Main thread
setTimeout(() => {
  Atomics.store(sharedArray, 0, 1); // Modify the shared value
}, 1000);
