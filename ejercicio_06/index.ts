/*
*6- Crear una interfaz Postre, con las propiedades, 
?nombre 
?y precio, 
!además tiene el método mostrarPrecio, que muestra el precio con un descuento del 15%.

*Crear una clase Menu que implementa Postre, con las propiedades 
?entrada, 
?plato principal
?y costo.

!Instanciar un objeto Menu.
*/
import { Menu } from './Menu';

const menu = new Menu(
  'Ensalada de brocoli, manzana y nueces',
  'Sorrentinos de cordero con salsa',
  45
);

console.log(`
  Menu
  entrada: ${menu.entrada},
  plato principal: ${menu.platoPrincipal},
  costo: u$a ${menu.costo}
  ------------------------------------------------
  Postre
  nombre: ${menu.nombre},
  precio: u$a ${menu.precio},
  con descuento: u$a ${menu.mostrar_precio()}
  ------------------------------------------------
  total: u$a ${menu.mostrar_precio() + menu.costo}`);
