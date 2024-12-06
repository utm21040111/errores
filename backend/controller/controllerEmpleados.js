import { empleadoModel } from "../model/modelEmpleados.js";

//Crear un registro de empleado

empleadoModel.create({
  name: "Edwin",
  lastName: "Sedano",
  age: 21,
  matricula: "UTM21040111",
});

export const testEmpleados = () => {
  console.log("Funciona correctamente controllerEmpleado");
};
