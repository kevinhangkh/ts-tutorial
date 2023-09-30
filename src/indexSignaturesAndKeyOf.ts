//! Index signatures

interface TransactionObj {
  /*readonly*/ [index: string]: number; // Means indexes/keys are strings and values are numbers
  // [key: string]: number; // Same as above
  // Useful if we don't know what the keys will be named in the beginning
  kongStrong: number;
}

const todaysTransactions: TransactionObj = {
  kongStrong: 10, // Required because the interface needs it

  // The following are optional
  broccoli: 20,
  pizza: 5,
  tangGourmet: 10,
};

const todaysNet = (transactions: TransactionObj): void => {
  let total = 0;
  for (const t in transactions) {
    total += transactions[t];
  }
  console.log(total);
};

todaysNet(todaysTransactions);

todaysTransactions.pizza = 40;

///////////////////////////////////

//! keyof Assertions

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
  favoriteClass: 'Painting',
};

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
