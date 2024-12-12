function createBankAccount(amount){
  var balance=100;
 return { deposit: function(amount){
   balance+=amount;
   return balance;
  },
  withdraw: function(amount){
    balance=balance-amount;
    return balance;
  },
  getBalance: function(){
    return balance;
  }
};
}
let detail=createBankAccount();
console.log(detail.getBalance());
detail=createBankAccount(200);
console.log(detail.getBalance());
console.log(detail.deposit(100));
console.log(detail.getBalance());
console.log(detail.withdraw(50));
console.log(detail.getBalance());
