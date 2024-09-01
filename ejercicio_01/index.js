"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Administrativo_1 = require("./Administrativo");
var Operario_1 = require("./Operario");
var admin = new Administrativo_1.default('Armado', 'Paredes', 'armando@paredes.com', 36, true);
var oper = new Operario_1.default('Juaquin', 'Silva', 'juaquin@silva.com', 'Produccion');
admin.mostrarMensaje();
oper.mostrarMensaje();
