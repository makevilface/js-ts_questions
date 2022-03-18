interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = StrictOmit<Todo, 'completed'>;

//

type TODO_ANY = any;

type TODO_UNKNOWN = unknown;

//

type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

//

interface TodoItem {
  title: string;
  description: string;
  completed: boolean;
}

let todo: TodoItem = {
  title: 'Title',
  completed: true,
  description: 'Description',
};

let todoKeys = Object.keys(todo) as (keyof TodoItem)[];

//

type List<TEntity> = TEntity[];
type Dict<TValue> = Record<string, TValue>;
type Collection<TValue> = List<TValue> | Dict<TValue>;

type Nullable<TEntity> = TEntity | null;
type Optional<TEntity> = TEntity | undefined;

type AnyObject = Dict<unknown>;
type AnyList = List<unknown>;
type AnyCollection = Collection<unknown>;
