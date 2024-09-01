/*
* 5- Crear una interfaz Local, con las propiedades 
? metrosCuadrados 
? y dirección, 
* crear otra interfaz llamada Vivienda que extienda de Local 
* y además tenga las propiedades 
? cantidadHabitaciones, 
? y barrio.
* Crear un Local, una Vivienda.
*/

import { Local, Vivienda } from './Local';

const local: Local = {
  mts: 30,
  direccion: 'Estados Unidos 6565',
};

const vivienda: Vivienda = {
  mts: 35,
  direccion: 'Australia 2000',
  cantidadHabitaciones: 4,
  barrio: 'Los eucaliptos',
};

console.log(`
  mts: ${local.mts},
  direccion: ${local.direccion}
  `);
console.log('------------------');
console.log(`
  mts: ${vivienda.mts},
  direccion: ${vivienda.direccion},
  habitaciones: ${vivienda.cantidadHabitaciones},
  barrio: ${vivienda.barrio}`);
