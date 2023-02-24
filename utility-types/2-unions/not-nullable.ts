type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type CarResponse = CarBrands | undefined | null;

type NotNullableCarResponse = NonNullable<CarResponse>;

const audi: NotNullableCarResponse = 'audi';
const bmw: NotNullableCarResponse = '';

export {};