const nums = [1, 4, 3, 6, 7, 8, 9, 2];
const result = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) result.push(nums[i]);
}
console.log(result); // [6, 7, 8, 9]
