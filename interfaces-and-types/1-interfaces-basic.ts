/**
 * Base interface
 */
interface Car {
    id: string;
    type: 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';
    brand: string;
    model: string;
    year: number;
  }

  interface RetailCar extends Car {
    sold: boolean;
  }

// const car: RetailCar = {};

/**
 * Declaration merging
 */

class Car {
constructor(data: Car) {
    this.type = data.type;
    this.brand = data.brand;
    this.model = data.model;
    this.year = data.year;
    }
}

const typeObject: Car = {
    id: 'jasmuuid',
    brand: 'mazda',
    model: '3',
    type: 'sedan',
    year: 2020,
}

const classObject = new Car(typeObject);

console.log(typeObject);
// [LOG]: {
//     "id": "jasmuuid",
//     "brand": "mazda",
//     "model": "3",
//     "type": "sedan",
//     "year": 2020
//   } 
console.log(classObject);
// [LOG]: Car: {
//     "type": "sedan",
//     "brand": "mazda",
//     "model": "3",
//     "year": 2020
//   } 

export {};