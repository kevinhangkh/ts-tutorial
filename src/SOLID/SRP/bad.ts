class Employee2 {
  // Own responsibility
  calculateSalary(): number {
    return 60000;
  }

  // Own responsibility
  getDepartment(): string {
    return 'IT';
  }

  // ! Extra responsibility => SRP violation
  save(): void {
    // Save employee to database
  }
}