import Persona from './Persona';
class Operario extends Persona {
  constructor(
    _nombre: string,
    _apellido: string,
    _correo: string,
    private _area: string
  ) {
    super(_nombre, _apellido, _correo);
  }
  set area(area: string) {
    this._area = area;
  }

  get area(): string {
    return this._area;
  }

  mostrarMensaje() {
    console.log('soy un Operario');
  }
}

export default Operario;
