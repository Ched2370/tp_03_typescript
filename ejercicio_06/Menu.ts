import { Postre } from './Postre';
export class Menu implements Postre {
  nombre: string = 'Flan con dulce de leche';
  precio: number = 15;
  mostrar_precio(): number {
    return this.precio * 0.15 + this.precio;
  }
  constructor(
    private _entrada: string,
    private _plato_principal: string,
    private _costo: number
  ) {}

  set entrada(entrada: string) {
    this._entrada = entrada;
  }
  get entrada() {
    return this._entrada;
  }
  set platoPrincipal(principal: string) {
    this._plato_principal = principal;
  }
  get platoPrincipal() {
    return this._plato_principal;
  }
  set costo(costo: number) {
    this._costo = costo;
  }
  get costo() {
    return this._costo;
  }
}
