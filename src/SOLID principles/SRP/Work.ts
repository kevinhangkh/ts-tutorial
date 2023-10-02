import { Employee } from './Employee';

export class Work {
  static doWork(employee: Employee, action: string): string {
    return `${employee.getName()} ${action}`;
  }
}
