const ContaBancaria = require ('./ContaBancaria');

let cc = new ContaBancaria(100);
console.log(cc.sacar(50));
console.log(cc.depositar(200));
console.log("Seu saldo é de: "+ cc.saldo);


