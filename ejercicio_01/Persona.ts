class Persona {
  constructor(
    protected _nombre: string,
    protected _apellido: string,
    protected _correo: string
  ) {}

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set apellido(apellido: string) {
    this._apellido = apellido;
  }
  get apellido(): string {
    return this._apellido;
  }
  set correo(correo: string) {
    this.correo = correo;
  }
  get correo(): string {
    return this._correo;
  }

  mostrarMensaje() {
    console.log('msg: ');
  }
}

export default Persona;
