// Crie uma classe Aluno com:

// nome
// notas (array de números)
// método media() → deve retornar a média das notas

class Student {
  constructor(name, notes) {
    this.name = name;
    this.notes = notes;
  }

  average() {
    const sum = this.notes.reduce((acc, value) => acc + value, 0);
    return sum / this.notes.length;
  }
}

const student = new Student("Teste", [10, 20, 10]);

console.log(student.average());