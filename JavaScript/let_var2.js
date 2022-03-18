let a = 40;

const func = () => {
  console.log('a', a); // ?

  let a;

  a = 45;
};

func();
