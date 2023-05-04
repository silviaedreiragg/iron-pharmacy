require('dotenv').config({ path: '../.env' })
const {  mongoose, connectToTheDatabase} = require("../config/db.config");
const productModel = require("../models/product.model");
const products = require("./products.seed");

const seedProducts = () => {
  productModel
    .deleteMany()
    .then(() => {
      return productModel.create(products).then(() => {
        console.log("The DataBase has been seeded");
      });
    })
    .catch((error) => {
      console.log(`The DataBase has not been seeded: ${error}`);
    });
};

connectToTheDatabase()
.then(() => seedProducts());