export interface Material {
  specialFact(): void;
  fact(): void;
}

export class Metal implements Material {
  private _name: string;
  private _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  specialFact(): string {
    return `${this._name} can clink`;
  }

  fact(): string {
    return `${this.specialFact()} and ${this._name} shines ${this._color}`;
  }
}

export class Wood implements Material {
  private _name: string;
  private _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  specialFact(): string {
    return `${this._name} can burn`;
  }

  fact(): string {
    return `${this.specialFact()} and ${this._name} has color ${this._color}`;
  }
}
