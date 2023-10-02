type Species = 'cat' | 'dog';

interface Pet {
  species: Species;
}

class Cat implements Pet {
  species: Species = 'cat';

  meow(): void {
    console.log('Meow');
  }
  walk(): void {
    console.log('Walk');
  }
  run(): void {
    console.log('run');
  }
}

const petIsCatBoolean = (pet: Pet): boolean => {
  return pet.species === 'cat';
};

const petIsCat = (pet: Pet): pet is Cat => {
  return pet.species === 'cat';
};

const garfield: Pet = new Cat();

if (petIsCatBoolean(garfield)) {
  // garfield.meow(); // ! Property 'meow' does not exist on type 'Pet'
  
  // Need to do this type casting instead
  const garfieldAsCat = (garfield as Cat);
  garfieldAsCat.meow();
  garfieldAsCat.walk();
  garfieldAsCat.run();
}

// Using the 'is' keyword
if (petIsCat(garfield)) {
  garfield.meow();
  garfield.walk();
  garfield.run();
}