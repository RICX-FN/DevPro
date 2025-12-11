// Crie uma classe ContaBancaria com:

// titular
// saldo
// método depositar(valor)
// método sacar(valor) (só deve permitir se houver saldo)

class ContaBancaria {
  constructor(holder, credit) {
    this.holder = holder;
    this.credit = credit;
  }

  deposit(value) {
    this.credit += value;
    console.log(`Depositou: ${value}. Saldo atual: ${this.credit}`);
  }

  withdraw(value) {
    if (this.credit >= value) {
      this.credit -= value;
      console.log(`Sacou: ${value}. Saldo atual: ${this.credit}`);
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}

const client = new ContaBancaria("Sr. Teste", 1000);

client.deposit(500);
client.withdraw(2000);
client.withdraw(800);
