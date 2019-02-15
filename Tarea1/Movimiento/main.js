import Movimiento from "./Movimiento.js";

let Cliente1 = new Movimiento('Carlos', 19, "Carlos de la Madrid, Esmeralda", 120000, 3, 2);
Cliente1.informacion();

Cliente1.nombre = 'Eduardo';
console.log(Cliente1.nombre);
Cliente1.edad = 20;
console.log(Cliente1.edad);
Cliente1.domicilio = 'aguador 145, San sebastian';
console.log(Cliente1.domicilio);
Cliente1.saldo = 200000;
console.log(Cliente1.saldo);
Cliente1.numeroDepositos = 2;
console.log(Cliente1.numeroDepositos);
Cliente1.numeroRetiros = 1;
console.log(Cliente1.numeroRetiros);

Cliente1.informacion();
Cliente1.retirar(50000);
Cliente1.informacion();
Cliente1.depositar(30000);
Cliente1.informacion();