// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: 'Kevin';
let userName: 'Kevin' | 'Johanna' | 'Jnoun';
userName = 'Johanna';

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

// logMsg('Hello!');
// logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

const subtract: mathFunction = function (a, b) {
  return a - b;
};

// logMsg(subtract(2, 3));

// Optional params
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// Default params
const sumAll = (a: number = 0, b: number, c: number = 0): number => {
  return a + b + c;
};

// logMsg(addAll(2, 3, 1));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3, 1));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));

// Rest params
const total = (...nums: number[]): number => {
  return nums.reduce((prev, current) => prev + current);
};

// logMsg(total(1, 2, 3, 4));

// Never type
const createError = (errMessage: string): never => {
  throw new Error(errMessage);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // commenting this line will result in an infinite loop then return type will be never
  }
};
