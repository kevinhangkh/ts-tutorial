export class Employee {
  private name: string;
  private job: string;

  constructor(name: string, job: string) {
    this.name = name;
    this.job = job;
  }

  public getName(): string {
    return this.name;
  }

  public getJob(): string {
    return this.job;
  }

  public print(): string {
    return `${this.name} has position ${this.job}`;
  }
}