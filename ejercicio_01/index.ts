/*
*1-Crear una clase Persona  
*con las siguientes propiedades 
?nombre, 
?apellido, 
?correo.
!Además contará con el método “mostrarMensaje”

*Crear 2 clases hijas 

*Clase Administrativo con los atributos:  
?edad (dato numérico), 
?activo (dato del tipo true/false),  
?el método “mostrarMensaje” 
!mostrará por consola el mensaje “soy un Administrativo”

*Crear una clase Operario con el atributo 
?“área”  
?el método “mostrarMensaje” 
!mostrará por consola el mensaje “soy un Operario”

!Instanciar un objeto y luego compilar el typescript a js.
*/

import Adminitrativo from './Administrativo';
import Operario from './Operario';

const admin = new Adminitrativo(
  'Armado',
  'Paredes',
  'armando@paredes.com',
  36,
  true
);
const oper = new Operario(
  'Juaquin',
  'Silva',
  'juaquin@silva.com',
  'Produccion'
);

admin.mostrarMensaje();
oper.mostrarMensaje();
