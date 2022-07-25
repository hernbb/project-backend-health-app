const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dni: { type: String, unique: true, required: true },
  telefono: { type: String, unique: true, required: true },
  country: { type: String, default: ""},
  address1: { type: String, default: ""},
  address2: { type: String, default: ""},
  city: { type: String, default: ""},
  province: { type: String, default: ""},
  zipCode: { type: String, default: ""},
  pruebas: [{ type: Schema.Types.ObjectId, ref: "Pruebas" }]
});

module.exports = model("User", userSchema);
