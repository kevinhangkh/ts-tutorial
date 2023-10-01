import { Employee } from './Employee';
import { Work } from './Work';

// ! Single Responsibility

const kev = new Employee('Kevin', 'Software developer');
console.log(kev.print());
console.log(Work.doWork(kev, 'implements a new feature'));
