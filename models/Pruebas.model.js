const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const pruebasSchema = new Schema({
    title: String,
    description: String,
    price: Number
  });
  
  module.exports = model("Pruebas", pruebasSchema);
  