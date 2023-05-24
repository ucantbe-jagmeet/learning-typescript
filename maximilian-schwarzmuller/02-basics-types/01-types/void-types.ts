function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  //   return;
}

printResult(add(5, 12));

// let someValue: undefined;
// undefined always want empty return statement for its function
// but we can also use void with empty return statement
