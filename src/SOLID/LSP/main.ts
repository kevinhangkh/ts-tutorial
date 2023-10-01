import { Human, Man, Woman } from './Human';

const human = new Human('Dominique');
const man = new Man('Kev');
const woman = new Woman('Jo');

const makeThemEatPasta = (person: Human): string => {
  return `${person.eat()} pasta`;
};

console.log(makeThemEatPasta(man));
console.log(makeThemEatPasta(woman));
console.log(makeThemEatPasta(human));
