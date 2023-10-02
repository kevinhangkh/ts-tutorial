/**
 * Splitted the big interface into smaller ones
 */

interface LandVehicle {
  drive(): void;
}

interface AirVehicle {
  fly(): void;
}

class DeLorean2 implements LandVehicle, AirVehicle {
  drive(): void {
    // Drive
  }
  fly(): void {
    // Fly
  }
}

class F35 implements AirVehicle {
  fly(): void {
    // Fly A10
  }
}

class HondaCivic implements LandVehicle {
  drive(): void {
    // Drive car
  }
}
