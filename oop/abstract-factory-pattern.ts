interface WheelCleaning {
  cleanWheels(): void;
}

class BasicWheelCleaning implements WheelCleaning {
  cleanWheels(): void {
    console.log('Soaping Wheel');
    console.log('Brushing Wheel');
  }
}

class ExecutiveWheelCleaning extends BasicWheelCleaning {
  cleanWheels(): void {
    super.cleanWheels();
    console.log('Waxing Wheel');
    console.log('Rinsing Wheel');
  }
}

interface BodyCleaning {
  cleanBody(): void;
}

class BasicBodyCleaning implements BodyCleaning {
  cleanBody(): void {
    console.log('Soaping Car');
    console.log('Rinsing Car');
  }
}

class ExecutiveBodyCleaning extends BasicBodyCleaning {
  cleanBody(): void {
    super.cleanBody();
    console.log('Waxing Car');
    console.log('Blow drying Car');
  }
}

class CarWashingProgram {
  constructor(private washLevel: number) {}

  runWash() {
    let wheelWash: WheelCleaning;
    let bodyWash: BodyCleaning;

    switch (this.washLevel) {
      case 1:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new BasicBodyCleaning();
        bodyWash.cleanBody();
        break;

      case 2:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;

      case 3:
        wheelWash = new ExecutiveWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
    }
  }
}

// Abstract factory pattern

interface ValetFactory {
  getWheelCleaning(): WheelCleaning;
  getBodyCleaning(): BodyCleaning;
}

class BronzeWashFactory implements ValetFactory {
  getWheelCleaning(): WheelCleaning {
    return new BasicWheelCleaning();
  }
  getBodyCleaning(): BodyCleaning {
    return new BasicBodyCleaning();
  }
}

class SilverWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new BasicWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}
class GoldWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new ExecutiveWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}

class CarWashProgram {
  constructor(private cleanFactory: ValetFactory) {}

  runWash() {
    const wheelWash = this.cleanFactory.getWheelCleaning();
    wheelWash.cleanWheels();

    const bodyWash = this.cleanFactory.getBodyCleaning();
    bodyWash.cleanBody();
  }
}
