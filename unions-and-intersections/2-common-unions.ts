interface Human {
    walk(): void;
    run(): void;
    drive(): void;
}

interface Dog {
    walk(): void;
    run(): void;
}

type Mamal = Human | Dog;

const mamal: Mamal = {
    walk: () => ({ type: 'run' }),
    run: () => ({ type: 'walk' }),
    drive: () => ({ type: 'drive' }),
}

mamal.drive();
mamal.run();
mamal.walk();

export {};