export interface Local {
  mts: number;
  direccion: string;
}

export interface Vivienda extends Local {
  cantidadHabitaciones: number;
  barrio: string;
}
