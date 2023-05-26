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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const acc = new AccountingDepartment("A1", []);
acc.mostRecentReport = "Economics";
acc.addReport("Business");
console.log(acc.mostRecentReport);
acc.addEmployee("Max");
acc.addEmployee("Manu");
acc.printReports();
// acc.printEmployeeInfo();
console.log(acc);
