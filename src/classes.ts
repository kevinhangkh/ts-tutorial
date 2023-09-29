/**
 * ! Data modifiers or visibility modifiers
 * public: can be accessed anywhere without any restrictions
 * private: visible only to that class and are not accessible outside the containing class
 * protected: similar to the private, except that protected properties can be accessed in subclasses
 * readonly: constant, should be initialized in class declaration or constructor
 * static: don't need an instance of a class to be accessed
 */

class Coder {
  secondLang!: string; // '!:' means we are not going to initialize it right away

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    // !Don't need this.name = name...
    // Because it's done in the constructor arguments
  }

  public getAge(): string {
    return `Hello, I'm ${this.age}`;
  }
}

const Kev = new Coder('Kevin', 'Rock', 30);
Kev.name;
Kev.getAge();
// Kev.age; // age is private
Kev.music;
// Kev.lang; // lang is protected

console.log(Kev.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Johanna = new WebDev('PC', 'Johanna', 'Indie', 22);
console.log(Johanna.getLang());
console.log(Johanna.computer);
console.log(Johanna.music);
// console.log(Johanna.age);
// console.log(Johanna.lang);

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Pianist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const patatedoucezer = new Pianist('Bebew', 'Piano');
console.log(patatedoucezer.play('plays'));

class Peeps {
  private static counter: number = 0;
  public id: number = 0;

  constructor(public name: string) {
    this.name = name; // Optional because it's done in the arguments
    this.id = ++Peeps.counter;
  }

  getCounter(): number {
    return Peeps.counter;
  }
}

const p1 = new Peeps('MdfkJnounz');
console.log(p1.getCounter());
console.log(p1.id);
const p2 = new Peeps('Patatedoucezer');
console.log(p2.getCounter());
console.log(p2.id);
console.log(p1.getCounter());

class Bands {
  private bandsState: string[];

  constructor() {
    this.bandsState = [];
  }

  public get bands(): string[] {
    return this.bandsState;
  }

  public set bands(data: string[]) {
    if (
      Array.isArray(data) &&
      data.every((element) => typeof element === 'string')
    ) {
      this.bandsState = data;
      return;
    }
    throw new Error('Data argument is not an array');
  }
}

const myBands = new Bands();
console.log(myBands.bands);
myBands.bands = ['AC/DC', 'Leidseplein', 'Kyo'];
console.log(myBands.bands);
myBands.bands = [...myBands.bands, 'Boston'];
// myBands.bands = 'Boston';
console.log(myBands.bands);
