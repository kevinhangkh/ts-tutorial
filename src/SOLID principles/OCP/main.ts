import { Material, Metal, Wood } from './Material';

// ! Open to extension Closed to modification

const handleMaterial = (materials: Material[]): void => {
  materials.forEach((material) => console.log(material.fact()));
};

const silver = new Metal('Silver', 'silvery');
const copper = new Metal('Copper', 'orange');
const steel = new Metal('Steel', 'grey');

const bamboo = new Wood('Wood', 'green');
const oak = new Wood('Oak', 'brown');
const ebony = new Wood('Ebony', 'black');

handleMaterial([silver, copper, steel, bamboo, oak, ebony]);

//////////////////////////////////////////

const handleTypes = (types: TypeGroup[]) => {
  types.forEach((type) => {
    type.handle();
  });
};

type TypeGroup = TypeA | TypeB;

class TypeA {
  handle() {
    console.log('Here is the logic to handle TypeA');
  }
}
class TypeB {
  handle() {
    console.log('Here is the different logic to handle TypeB');
  }
}
const input = [new TypeA(), new TypeB()];
// handleTypes(input);
