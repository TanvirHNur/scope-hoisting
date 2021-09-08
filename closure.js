/*
const bank = owner => {
    let balance =0;
    return amount => {
        // balance = balance + amount;
       return balance += amount;
    }
    
}

const MofijBank = bank('Mofij');
console.log(MofijBank(100));
console.log(MofijBank(300));
console.log(MofijBank(50));
console.log(MofijBank.balance);
console.log(MofijBank(400))
 */





const bank = owner => {
    let balance =0;
    return {
        deposit: amount => {
            // balance = balance + amount;
           return balance += amount;
        },
        withdraw: amount => {
            // balance = balance + amount;
           return balance -= amount;
        }
    }
    
}

const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(300));
console.log(MofijBank.deposit(50));
console.log(MofijBank.deposit.balance);
console.log(MofijBank.deposit(400))


console.log(MofijBank.withdraw(100));
console.log(MofijBank.withdraw(300));
console.log(MofijBank.withdraw(50));
console.log(MofijBank.withdraw.balance);
console.log(MofijBank.withdraw(400))