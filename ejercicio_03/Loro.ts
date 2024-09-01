import Animal from './Animal';
class Loro extends Animal {
  constructor(_nombre: string, _peso: number, _tipo?: 'Barranquero' | string) {
    super(_nombre, _peso, _tipo);
  }
  alimentar(): void {
    const cantAli =
      this._tipo === 'Barranquero' ? this._peso * 0.065 : this._peso * 0.05;
    console.log(`${this._nombre}, alimentar con ${cantAli}g`);
  }
}

export default Loro;
