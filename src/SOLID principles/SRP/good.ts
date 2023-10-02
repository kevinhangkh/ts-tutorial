class Employee3 {
  calculateSalary(): number {
    return 60000;
  }

  getDepartment(): string {
    return 'IT';
  }
}

// Moved save() to another class
class DatabaseService {
  save(employee: Employee3): void {
    // Save employee to database
  }
}