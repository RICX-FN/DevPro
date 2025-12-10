/* Sistema de Produtos
Crie uma classe Produto com:
    nome
    preço
    quantidade em estoque
Métodos:
    adicionarEstoque(qtd)
    removerEstoque(qtd) (não permitir ficar negativo)
    valorTotal() → retorna preço * quantidade
Depois crie 3 produtos e calcule o valor total do estoque.*/

class Product {
  constructor(name, price, amountStock) {
    this.name = name;
    this.price = price;
    this.amountStock = amountStock;
  }

  addStock(amount) {
    return (this.amountStock += amount) + " " + "itens foram adicionados!";
  }

  remStock(amount) {
    return amount <= this.amountStock
      ? (this.amountStock -= amount) +
          " " +
          "item do Stock foram removidos com Sucesso!"
      : "Invalid quantity!";
  }

  totValue() {
    return console.log(
      `Valor total de [${this.name}]: ${this.price * this.amountStock}`
    );
  }
}

const item1 = new Product("Caneta", 100, 5);
const item2 = new Product("Sprite", 500, 1);
const item3 = new Product("Mouse", 22000, 2);

console.log(item1.addStock(2));
console.log(item1.remStock(1));
console.log(item3.totValue());
