const nums = [1, 4, 3, 6, 7, 8, 9, 2];

function filterNums() {
  const result = []; // Internal variable

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i]);
  }

  return result;
}

console.log(filterNums()); // Output: [ 6, 7, 8, 9 ]
