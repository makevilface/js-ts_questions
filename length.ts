//Реализовать тип Length, который принимает кортеж и возвращает длину этого кортежа

type teslaLength = Length<['tesla', 'model 3', 'model X', 'model Y']>; // expected 4

type Length<T extends { length: number }> = T['length'];
