interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface PersonWithAddress extends Person {
    address: {
      addressOne: string;
      addressTwo?: string;
    };
  }

  const readonlyJane: Readonly<PersonWithAddress> = {
    firstName: 'Jane',
    lastName: 'Doe',
    address: {
        addressOne: 'Kordunska 12'
    }
  }

  const ReadonlyPartialJane: Readonly<Partial<PersonWithAddress>> = {
    firstName: 'Jane',
    lastName: 'Doe'
  }

  readonlyJane.firstName = 'John';

  export {};