interface Inmueble {
  tipo: string;
  metrosCuadrados: number;
  direccion: string;
  alquilar(): void;
}

export interface Departamento extends Inmueble {
  precio: number;
}
