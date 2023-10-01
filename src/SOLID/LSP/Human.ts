export interface Male {
  canScratchBalls(): string;
}

export class Human {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  eat(): string {
    return `${this._name} eats`
  }

  walk(): string {
    return `${this._name} walks`
  }
}

export class Man extends Human implements Male {
  constructor(name: string) {
    super(name);
  }

  canPeeStanding() {
    return `${this._name} pees in a standing position`
  }

  canScratchBalls(): string {
    return `${this._name} scratches his balls`
  }
}

export class Woman extends Human {
  constructor(name: string) {
    super(name);
  }

  canPeeSitting(): string {
    return `${this._name} pees in a sitting position`
  }

  canExpressEmotions(): string {
    return `${this._name} expresses her emotions`
  }
}