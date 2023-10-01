interface Vehicle {
  drive(): void;
  fly(): void;
}

/**
 * DeLorean is implementing all the functions from Vehicle
 */
class DeLorean implements Vehicle {
  drive(): void {
    // Drive
  }
  fly(): void {
    // Fly
  }
}

/**
 * A10Warthog and FiatMultipla classes are forced to implement functions that they don't use
 */
class A10Warthog implements Vehicle {
  drive(): void {
    // ! A10 cannot drive
    throw new Error('A10 cannot drive!');
  }
  fly(): void {
    // Fly A10
  }
}

class FiatMultipla implements Vehicle {
  drive(): void {
    // Drive car
  }
  fly(): void {
    // ! Fiat Multipla cannot fly
    throw new Error('Fiat Multipla cannot fly!');
  }
}
