abstract class Department {
  // private readonly id: string;
  // private name: string;

  static fiscalYear = 2023;
  // static methods and variables are only called by or within static methods
  // the other way of calling static variable is by class name

  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log(`It Department - ID` + this.id);
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

  describe() {
    console.log(`Accounting Department - ID ` + this.id);
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

const employee1 = Department.createEmployee("Employee 1");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Superman"]);
it.addEmployee("Jagmeet");
it.addEmployee("Tony");

// accounting.employees[2] = "Anna";
// it.describe();
console.log(it);

const acc = new AccountingDepartment("A1", []);
acc.mostRecentReport = "Economics";
acc.addReport("Business");
// console.log(acc.mostRecentReport);
acc.addEmployee("Max");
acc.addEmployee("Manu");
// acc.printReports();
// acc.printEmployeeInfo();

acc.describe();

// console.log(acc);
