// Тип принимает кортеж и возвращает true, если любой из элементов кортежа true.
// Если же кортеж пустой, то возвращаем false

type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false

type AnyOf<T extends readonly any[]> = T extends [infer H, ...infer T]
  ? H extends 0 | '' | false | [] | { [P in any]: never }
    ? AnyOf<T>
    : true
  : false;
