import "reflect-metadata";

import { plainToClass } from "class-transformer";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A BOok", price: 88.99 },
];

// const p1 = new Product("A Book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products); // class , data

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
