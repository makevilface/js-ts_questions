// Реализовать копирование объетов

const copyObj = (obj, shallow = true) => (shallow ? { ...obj } : JSON.parse(JSON.stringify(obj)));

const obj = {
  foo: 'bar',
  baz: {
    qux: {
      a: 'b',
    },
  },
};

const _obj = copyObj(obj);
