// типизировать функцию
// чтобы мы не могли передать ключ, которого нет у объекта
// для типизации использовать generic

const getItemByKey = <T, K extends keyof T>(item: T, key: K): T[K] => {
  return item[key];
};
