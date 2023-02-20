const result = Math.max(23, 45, 67, 89, 234);
console.log(result);

const result2 = [12, 34, 45, 67, 789];
console.log(Math.max(...result2));

const numbers = [12, 34, 45, 56, 345];

const numbers2 = numbers;
numbers.push(45);
numbers2.push(32);

console.log(numbers2);
console.log(...numbers, 56);