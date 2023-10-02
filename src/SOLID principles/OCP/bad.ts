class Account {
  constructor(private balance: number) {}

  calculateInterest(accountType: string): number {
    if (accountType === 'Saving') {
      return this.balance * 0.03;
    } 
    /**
     * else if (accountType === 'Current') {
     *  return this.balance * 0.02;
     * }
     */
    else {
      return this.balance * 0.01;
    }
    // ! What if we have a new type of account 'Current' with a new interest rate?
    // ! We will need to add an else if => OCP violation
  }
}
