import { Schema, model } from "mongoose";

export const empleadoSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  matricula: {
    type: String,
  },
});

export const empleadoModel = new model("Tabla Empleados", empleadoSchema);
