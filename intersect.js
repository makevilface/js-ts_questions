// Пересечение (одинаковые элементы) массивов

const intersect = (a, b) => a.filter((i) => b.includes(i));

intersect([1, 2, 3], [1, 2, 4]); // [1, 2]
