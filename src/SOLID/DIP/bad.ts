// High level class
class DataAccessLayer {
  constructor() {}
  public addCustomer(name: string): void {
    // Add customer to db
    const logger = new FileLogger(); // ! Highly dependent on the lower level class FileLogger
    logger.log(`Adding customer ${name}`);

    // ! What if we want to log to database in the future and use DatabaseLogger instead of FileLogger?
    // ! We will need to change the addCustomer function implementation
  }
}

// Low level class
class FileLogger {
  constructor() {}
  public log(message: string): void {
    // Logs to log file
  }
}

// Low level class
class DatabaseLogger {
  constructor() {}
  public log(message: string): void {
    // Logs to database
  }
}
