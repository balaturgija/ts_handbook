const obj = {
    a: 1,
    b: 2,
    c: 3,
}

type abc = keyof typeof obj;
const a: abc = 'a';

type arrAbc = Array<keyof typeof obj>;

const array: arrAbc = ['a', 'b', 'c'];