const numbers = [1, 2, 3, 4, 5, 6];

// Group numbers based on whether they are even or odd
const groupedNumbers = [...numbers].group((num) => num % 2 === 0);

console.log(groupedNumbers);
// Output: { false: [1, 3, 5], true: [2, 4, 6] }
