import { schema, model } from "mongose";

export const empleadoSchema = new Schema({
  name: {
    type: string,
  },
  lastName: {
    type: string,
  },
  age: {
    type: number,
  },
  matricola: {
    type: string,
  },
});

export const empleadoModel = new model("Tabla Empleados.", empleadoSchema);
