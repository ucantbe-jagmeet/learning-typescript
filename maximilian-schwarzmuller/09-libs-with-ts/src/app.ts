import "reflect-metadata";

import { plainToClass } from "class-transformer";

import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A BOok", price: 88.99 },
];

const newProd = new Product("", -44.99);
validate(newProd).then((err) => {
  if (err.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(err);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A Book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products); // class , data

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
