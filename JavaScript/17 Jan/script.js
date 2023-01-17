// console.log("Abstraction");
/**
 * Abstraction : Hide implementation details and provide only limited details
 */

// ATM (Software to be used in ATM)
/**
 *  Money Withdrawl
 *  Money Transfer
 *  Mini Statement
 *  Pin Change
 *  Check Balance
 *  Balance Enquiry
 *  etc
 */

class Atm {
  constructor() {
    this.balance = 50000;
    this.lastWithdrawlTime = "15 Jan 2023, 15:00:00";
    this.withdwalCount = 5;
  }

  withdrawMoney(amount) {
    /**
     * 1. Enter the amount to be withdrawn
     * 2. Bank checks the balance in our account
     *  2.1 If balance is less than requested amount, show insufficient amount message
     * 2.2 Check if you have exceeded the limit for withdral in terms of count (monthly)
     * 2.3 Check the amount to be withdrawn is in limits or not
     * 2.4 Check for PIN entered.
     * 2.5 The transaction is informed to RBI
     * 2.6 Trigger the SMS for the withdrawl
     * 3. Money is withdrawn
     */
    if (amount > this.balance) {
      alert("Insufficient funds in your account");
      return;
    }
    if (amount > 20000) {
      alert("You can only withdraw only INR 20,000 in one transaction");
      return;
    }
    if (this.withdwalCount > 10) {
      alert("You have exceeded you withdrawl limit for this month");
      return;
    }

    alert(`Rs ${amount} withdran successfully.`);
  }
}

// let amountToBeWithdrawn = prompt("Enter the amount to be withdrawn");

// amountToBeWithdrawn = Number(amountToBeWithdran);

const atm = new Atm();
console.log(atm)
// atm.withdrawMoney(amountToBeWithdrawn);
