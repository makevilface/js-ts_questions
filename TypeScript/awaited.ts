// Достать тип из промиса

// infer R -- какой-либо не известный тип

type Awaited<T> = T extends Promise<infer R> ? R : T;
