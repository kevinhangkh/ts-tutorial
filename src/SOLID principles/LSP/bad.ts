class Employee {
  calculateSalary(): void {}
  calculateBonus(): void {}
}

class PermanentEmployee extends Employee {
  calculateSalary(): void {}
  calculateBonus(): void {}
}

class ContractorEmployee extends Employee {
  calculateSalary(): void {}
  calculateBonus(): void {
    // ! Violates Liskov Substitution principle
    throw new Error("Contractor employees don't get bonuses!");
  }
}

const employee = new Employee();
const permanent = new PermanentEmployee();
const contractor = new ContractorEmployee();

const getEmployeeInfo = (employee: Employee): void => {
  employee.calculateSalary();
  employee.calculateBonus();
}

getEmployeeInfo(employee);
getEmployeeInfo(permanent);

/**
 * For getEmployeeInfo(contractor), 
 * calculateBonus() will throw an error which will break the app
 * ! LSP violation
 */
getEmployeeInfo(contractor); 

/**
 * ! calculateBonus(): void {} should be moved to another interface 
 * ! so that only classes that need this function implement that interface 
 */


