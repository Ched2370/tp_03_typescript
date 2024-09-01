class Animal {
  constructor(
    protected _nombre: string,
    protected _peso: number,
    protected _tipo?: 'Barranquero' | string
  ) {}

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set tipo(tipo: string) {
    this._tipo = tipo;
  }
  get tipo(): string | undefined {
    return this._tipo;
  }
  set peso(peso: number) {
    this._peso = peso;
  }
  get peso(): number {
    return this._peso;
  }

  alimentar() {
    console.log(`desde animal!!!`);
  }
}

export default Animal;
