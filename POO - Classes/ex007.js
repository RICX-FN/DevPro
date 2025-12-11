/*Sistema de Usuários (Login Fake)
Crie uma classe User com:
    email
    senha
Métodos:
    validarEmail() → retorna true/false
    validarSenha() → senha ≥ 6 caracteres
    login(email, senha) → retorna "Acesso permitido" ou "Credenciais inválidas"
Simule dois usuários e tente logar.*/

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  validateEmail() {
    return this.email.includes("@") && this.email.includes(".") ? true : false;
  }

  validatePassword() {
    return this.password.length >= 6 ? true : false;
  }

  login(email, password) {
    if (
      this.validateEmail() &&
      this.validatePassword() &&
      this.email === email &&
      this.password === password
    ) {
      return "Acesso permitido";
    }
    return "Credenciais inválidas";
  }
}

const user1 = new User("test1@gmail.com", "teste123");
const user2 = new User("test2@gmail.com", "teste123");

user1.validateEmail();
user1.validatePassword();

console.log(user1.login("test1@gmail.com", "teste123"));
