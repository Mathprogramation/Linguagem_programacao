class ContaBancaria{

    #saldo=0;

    constructor(saldo=0){
        this.#saldo = saldo;
    }


    depositar(valor){
        return this.#saldo += valor;
    }

    sacar(valor){
        if(valor<=this.#saldo){
            return this.#saldo -= valor;
        }
    }

    get saldo(){
        return this.#saldo;
    }
}

    module.exports = ContaBancaria;

