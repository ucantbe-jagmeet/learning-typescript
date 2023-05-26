class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(` Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2" -> not done due to readonly property
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Superman"]);
it.addEmployee("Jagmeet");
it.addEmployee("Tony");

// accounting.employees[2] = "Anna";
// it.describe();
console.log(it);

const acc = new AccountingDepartment("A1", ["Economics"]);
acc.addReport("Business");
acc.addEmployee("Max");
acc.addEmployee("Manu");
acc.printReports();
// acc.printEmployeeInfo();
console.log(acc);
