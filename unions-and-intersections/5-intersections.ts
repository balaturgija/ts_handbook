type Robert = 'person' | 'pm';
type Sebastijan = 'person' | 'developer';

interface Person {
  firstName: string;
  lastName: string;
}

type SebaRobertion = Robert & Sebastijan;

interface Loggable {
  log: (message: string) => void;
  message: string;
}

interface Queryable {
  search: (query: string) => void;
  query: string;
}

interface Listable<T> {
  items: T[];
}

type ProposalState<T> = Loggable & Queryable & Listable<T>;

const state: ProposalState<Person> = {};

/* 
    Example 2
*/

type F1 = (a: string, b: string) => void;
type F2 = (a: number, b: number) => void;

const f: F1 & F2 = (a: string | number, b: string | number) => {};
f('hello', 'world');
f(1, 2);
f(1, 'wordl');

export {};
