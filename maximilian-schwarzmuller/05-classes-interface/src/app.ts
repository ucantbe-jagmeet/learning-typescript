class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("IT");
console.log(accounting);
