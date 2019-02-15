import Contacto from "./Contacto.js";

let c1 = new Contacto("Juan Alvarez", "Operador", "312-134-1343", "juanalavarez@gmail.com");
let c2 = new Contacto("Carlos García", "Gallo de Oro", "312-194-1376", "cgarcia47@ucol.mx");

c1.imprimir();
c2.imprimir();

console.log(c1.nombre);
console.log(c1.email);

console.log(c2.nombre);
console.log(c2.email);

c1.puesto = "Jefe de departamento";
c2.puesto = "Gallo Supremo";
c1.email = "juanalvaressss@gmail.com"

console.log(c1.puesto);
console.log(c2.puesto);

