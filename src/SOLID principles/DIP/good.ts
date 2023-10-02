// High level class
class DataAccessLayer2 {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  /**
   * No matter which class we use for logging, we don't need to change addCustomer function
   * because DataAccessLayer2 doesn't rely on the lower level class
   */
  public addCustomer(name: string): void {
    // Add customer to db
    this.logger.log(`Adding customer ${name}`);
  }
}

// Interface
interface Logger {
  log(message: string): void;
}

// Low level class
class FileLogger2 implements Logger {
  constructor() {}
  public log(message: string): void {
    // Logs to log file
  }
}

// Low level class
class DatabaseLogger2 implements Logger {
  constructor() {}
  public log(message: string): void {
    // Logs to database
  }
}
