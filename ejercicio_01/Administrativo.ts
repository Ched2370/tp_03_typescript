import Persona from './Persona';

class Administrativo extends Persona {
  constructor(
    nombre: string,
    apellido: string,
    correo: string,
    private _edad: number,
    private _activo: boolean
  ) {
    super(nombre, apellido, correo);
  }
  set edad(edad: number) {
    this._edad = edad;
  }
  get edad() {
    return this._edad;
  }
  set activo(activo: boolean) {
    this._activo = activo;
  }
  get activo() {
    return this._activo;
  }

  mostrarMensaje(): void {
    console.log('soy un Administrativo');
  }
}

export default Administrativo;
