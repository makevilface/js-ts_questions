let a = 15;

const fooBar = () => {
  let a = 25;

  var result = () => {
    console.log(a);
  };

  result.a = 105;

  return result;
};

const lol = fooBar();

lol();
