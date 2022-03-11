type foo = IsBoolean<1>; // expected to be false

type bar = IsBoolean<'undefined'>; // expected to be false

type valid = IsBoolean<false>; // expected to be true

type IsBoolean<T> = T extends boolean ? true : false;
