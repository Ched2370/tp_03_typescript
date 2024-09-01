import Animal from './Animal';

class Canario extends Animal {
  constructor(_nombre: string, _peso: number, _tipo?: string | 'Barranquero') {
    super(_nombre, _peso, _tipo);
  }

  alimentar(): void {
    console.log(`${this._nombre}, alimentar con ${this._peso * 0.15}g`);
  }
}

export default Canario;
