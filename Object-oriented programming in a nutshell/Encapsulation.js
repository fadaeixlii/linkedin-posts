class BankAccount {
  balance = 0; // Private field
  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
