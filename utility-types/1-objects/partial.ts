interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithAddress extends Person {
    address: {
        addressOne: string;
        addressTwo?: string;
    }
}

const jhon: PersonWithAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        addressOne: 'Kordunska 12',
    }
}

const jane: Partial<PersonWithAddress> = {
    firstName: 'Jane',
}

export {};