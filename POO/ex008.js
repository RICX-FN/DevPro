/*✅ O que esse sistema de hotel faz de profissional
Cada quarto é um objeto independente com estado próprio (livre/ocupado).
Cada reserva é um objeto separado, que sabe seu valor.
O hotel gerencia quartos e reservas, mantendo separação de responsabilidades.
Mostra quartos disponíveis e resumo das reservas, como faria num sistema real de frontend/backend.
Toda lógica de reserva está encapsulada, sem misturar interface com dados.*/

// Classe Quarto
class Quarto {
  constructor(numero, tipo, preco) {
    this.numero = numero;
    this.tipo = tipo; // Ex: "Simples", "Duplo", "Luxo"
    this.preco = preco;
    this.status = "livre"; // livre ou ocupado
  }

  ocupar() {
    this.status = "ocupado";
  }

  liberar() {
    this.status = "livre";
  }
}

// Classe Reserva
class Reserva {
  constructor(quarto, cliente, dias) {
    this.quarto = quarto;
    this.cliente = cliente;
    this.dias = dias;
  }

  valorFinal() {
    return this.quarto.preco * this.dias;
  }
}

// Classe Hotel
class Hotel {
  constructor() {
    this.quartos = [];
    this.reservas = [];
  }

  adicionarQuarto(quarto) {
    this.quartos.push(quarto);
  }

  reservar(quartoNumero, cliente, dias) {
    const quarto = this.quartos.find((q) => q.numero === quartoNumero);
    if (!quarto) return "Quarto não encontrado!";
    if (quarto.status === "ocupado") return "Quarto já ocupado!";

    const reserva = new Reserva(quarto, cliente, dias);
    this.reservas.push(reserva);
    quarto.ocupar();
    return `Reserva confirmada para ${cliente} no quarto ${
      quarto.numero
    }. Valor: ${reserva.valorFinal()}`;
  }

  quartosDisponiveis() {
    return this.quartos.filter((q) => q.status === "livre");
  }
}

// Teste do sistema
const hotel = new Hotel();

// Adicionar quartos
hotel.adicionarQuarto(new Quarto(101, "Simples", 100));
hotel.adicionarQuarto(new Quarto(102, "Duplo", 150));
hotel.adicionarQuarto(new Quarto(103, "Luxo", 300));
hotel.adicionarQuarto(new Quarto(104, "Simples", 100));
hotel.adicionarQuarto(new Quarto(105, "Duplo", 150));

// Fazer reservas
console.log(hotel.reservar(101, "Ana", 3)); // Reserva Ana
console.log(hotel.reservar(102, "Bruno", 2)); // Reserva Bruno
console.log(hotel.reservar(101, "Carlos", 1)); // Quarto já ocupado

// Mostrar quartos disponíveis
console.log(
  "Quartos disponíveis:",
  hotel.quartosDisponiveis().map((q) => q.numero)
);

// Mostrar todas reservas
console.log(
  "Reservas realizadas:",
  hotel.reservas.map((r) => ({
    cliente: r.cliente,
    quarto: r.quarto.numero,
    dias: r.dias,
    valor: r.valorFinal(),
  }))
);
