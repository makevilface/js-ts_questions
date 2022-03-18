const myArray = ['test', 'test', 'apple', 'bottle', 'airpods', 'airpods'];

const noDublicate = (arr) => [...new Set(arr)];

console.log(noDublicate(myArray));
