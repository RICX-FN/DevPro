// Crie uma classe Carro com:

// marca
// modelo
// ano
// método info() → deve imprimir algo como: "Toyota Corolla (2020)"

class Car {
  constructor(marca, model, year) {
    this.marca = marca;
    this.model = model;
    this.year = year;
  }

  info() {
    return `${this.marca} ${this.model} ${this.year}`;
  }
}

const car = new Car("Toyota", "LandCruiser", 2025);

console.log(car.info());
