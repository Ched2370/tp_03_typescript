/*
*4- Crear una interfaz Inmueble, con las propiedades 
? tipo, 
? metrosCuadrados, 
? dirección 
! y un método sin implementar, llamado “Alquilar”, 
! que mostrará el precio de alquiler.
*/

import { Departamento } from './Inmueble';

const departamento: Departamento = {
  tipo: 'Departamento',
  metrosCuadrados: 50,
  direccion: 'av. siempre viva 2525',
  precio: 500000.0,
  alquilar() {
    console.log(`
      tipo: ${this.tipo},
      mts²: ${this.metrosCuadrados},
      direccion: ${this.direccion},
      precio: u$a ${this.precio}`);
  },
};

departamento.alquilar();
