// Practice

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  validateUser() {
    return this.email.length >= 6 && this.email.includes("@");
  }
}

const user = new User("teste@gmail.com", "pass123");

user.validateUser() ? console.log("User Valid") : console.log("User Invalid!");
