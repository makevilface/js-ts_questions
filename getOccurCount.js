// Реализовать функцию для поиска количества вхождений каждого элемента

const getOccurCount = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
};

getOccurCount(['a', 'b', 'c', 'c', 'a', 'b', 'b', 'a']); // { a: 3, b: 3, c: 2 }
