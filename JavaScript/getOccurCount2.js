// Реализовать функцию для поиска количества вхождений каждого элемента

const getCountOccur = (arr, item) => arr.reduce((a, c) => (c === item ? a + 1 : a), 0);

getCountOccur([1, 1, 2, 1, 2, 3], 4); // 0
getCountOccur([1, 1, 2, 1, 2, 3], 1); // 3
