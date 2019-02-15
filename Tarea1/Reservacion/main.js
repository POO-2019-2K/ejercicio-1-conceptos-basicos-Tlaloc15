import Reservacion from "./Reservacion.js";

let reservacion1 = new Reservacion("Carlos García", "King Size", new Date(2019, 2, 10));

reservacion1.imprimir();

reservacion1.nombre = "Carlos García"
console.log(reservacion1.nombre);

reservacion1.tipoHabitacion = "Suite"
console.log(reservacion1.tipoHabitacion);

reservacion1.costoDia = 2000;
console.log(reservacion1.costoDia);

reservacion1.diaInicio = new Date(2019, 2, 14);
console.log(reservacion1.diaInicio);


reservacion1.informacionReservacion();