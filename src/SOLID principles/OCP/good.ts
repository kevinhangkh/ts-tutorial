interface Interest {
  calculateInterest(): number;
}

class Account2 {
  protected balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
}

class SavingAccount extends Account2 implements Interest {
  constructor(balance: number) {
    super(balance);
  }
  calculateInterest(): number {
    return this.balance * 0.03;
  }
}

class CurrentAccount extends Account2 implements Interest {
  constructor(balance: number) {
    super(balance);
  }
  calculateInterest(): number {
    return this.balance * 0.02;
  }
}
