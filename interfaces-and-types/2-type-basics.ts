type CarType = 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';

/**
 * Base type
 */
type CarAsType = {
    id: number;
    type: CarType;
    brand: string;
    model: string;
    year: number;
}

/**
 * Extended
 */
type RetailCarAsType = CarAsType & { sold: boolean };

const test: RetailCarAsType = {
    id: 1,
    type: 'crossover',
    brand: 'Mazda',
    model: '3',
    year: 2020,
    sold: false
}

export {};