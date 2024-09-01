import Inmueble from './Inmueble';

class Departamento implements Inmueble {
  _tipo: string = 'Departamento';
  _metrosCuadrados: number = 50;
  _direccion: string = 'av. Siempre viva 2525';

  constructor(private _precio: number) {
    this._precio = _precio;
  }

  set precio(precio: number) {
    this._precio = precio;
  }
  get precio() {
    return this._precio;
  }

  alquilar() {
    console.log(`
      tipo: ${this._tipo},
      mts²: ${this._metrosCuadrados},
      direccion: ${this._direccion},
      precio: u$a ${this._precio}`);
  }
}

export default Departamento;
