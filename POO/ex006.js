/*Carrinho de Compras
Crie uma classe Carrinho que:
    contém um array de produtos
método adicionarProduto(produto)
método total() → soma tudo usando reduce

Crie 2 produtos, adicione ao carrinho e mostre o total.*/

class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Carrinho {
  constructor() {
    this.cart = [];
  }

  // Adiciona um produto ao carrinho
  addProduct(product) {
    const existing = this.cart.find((p) => p.id === product.id);
    existing
      ? (existing.quantity += product.quantity)
      : this.cart.push(product);
  }

  getTotal() {
    return this.cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  listProducts() {
    return this.cart;
  }
}

const prod1 = new Product(1, "Camisa", 5000, 2);
const prod2 = new Product(2, "Calça", 8000, 1);

const carrinho = new Carrinho();
carrinho.addProduct(prod1);
carrinho.addProduct(prod2);
carrinho.addProduct(new Product(1, "Camisa", 5000, 1));

console.log("Lista de produtos no carrinho:", carrinho.listProducts());
console.log("Total do carrinho:", carrinho.getTotal());
