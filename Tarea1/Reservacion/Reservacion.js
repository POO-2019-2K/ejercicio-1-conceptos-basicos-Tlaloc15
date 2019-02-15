export default class Reservacion {
    constructor(nombreCliente, tipoHabitacion, fechaLlegada, fechaSalida) {
        this._nombreCliente = nombreCliente;
        this._tipoHabitación = tipoHabitacion;
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;
    }
    informacionReservacion(){
        console.log(`Nombre: ${this._nombreCliente}\nTipo de habitacion: ${this._tipoHabitacion}\nPrecio por día: ${this._costoDia}\nDia de inicio: ${this._diaInicio}\nCantidad de Días: ${this._cantidadDias}`);
    }

    get nombre(){
        return this._nombreCliente;
    }

    get tipoHabitación(){
        return this._tipoHabitación;
    }

    get costoDia(){
        return this._costoDia;
    }


    set tipoHabitación(tipoHabitación){
        this._tipoHabitación = tipoHabitación;
    }
}