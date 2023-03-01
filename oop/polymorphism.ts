interface Vehicle {
  moveTo(x: number, y: number): void;
}

class Car implements Vehicle {
  moveTo(x: number, y: number) {
    console.log(x);
  }
}

class SportCar extends Car {}

class Airplane {
  moveTo(x: number, y: number) {
    console.log(x);
  }
}

var airplane = new Airplane();

var car = new SportCar();

function navigate(vehicle: Vehicle) {}

navigate(airplane);
navigate(car);
