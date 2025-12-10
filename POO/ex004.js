/* Crie uma classe Tarefa com:
    título
    descrição
    status (pendente, concluída)
Método:
    concluir() → muda o status para "concluída"
    info() → imprime: "Título — Status"
Depois crie 3 tarefas e conclua 1 delas.*/

class Task {
  constructor(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
  }

  done() {
    return this.status === true ? this.status = false : this.status = true;
  }
  
  info() {
    return console.log(`Title: ${this.title} Status: ${this.status === true ? "Done." : "Pending."}`);
  }
}

const task1 = new Task("Fix bug", "Fix button in css", true);
const task2 = new Task("Feat new component", "Create a new component jsx", false);
const task3 = new Task("Learn English", "Daily study", false);

task1.done();
task1.info();
task2.info();
task3.info();
