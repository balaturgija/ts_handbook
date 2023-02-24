interface Person {
    firstName: string;
    lastName: string;
}

type FirstName = Pick<Person, 'firstName'>;

type CarBrands = 'mazda' | 'audi' | 'bmw';

type PickingConstructorProperties = Pick<CarBrands, ''>;

export {};