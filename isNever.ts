//Реализовать тип IsNever<T>, который принимает тип T. Если тип T это never, вернуть true, иначе false

type foo2 = IsNever<never>; // expected to be true
type bar2 = IsNever<undefined>; // expected to be false

type IsNever<T> = [T] extends [never] ? true : false;
