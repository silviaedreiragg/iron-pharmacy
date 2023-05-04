require('dotenv').config({ path: '../.env' })
const {  mongoose, connectToTheDatabase} = require("../config/db.config");
const brandModel = require("../models/brand.model");
const brands = require("./brands.seed");

const seedBrands = () => {
  brandModel
    .deleteMany()
    .then(() => {
      return brandModel.create(brands).then(() => {
        console.log("The DataBase has been seeded");
      });
    })
    .catch((error) => {
      console.log(`The DataBase has not been seeded: ${error}`);
    });
};

connectToTheDatabase()
.then( () => seedBrands())