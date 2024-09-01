# trabajo practico 03 - Typescript

![typescript](https://github.com/user-attachments/assets/aebcdc40-315b-457a-ac3b-49f1aa27cc1b)

## Colaborador
- Ibañez Mario

---

### TRABAJO PRÁCTICO N°3

#### EJERCICIOS

1. Crear una clase Persona  con las siguientes propiedades nombre, apellido, correo.
Además contará con el método “mostrarMensaje”
Crear 2 clases hijas 
Clase Administrativo con los atributos:  edad (dato numérico), activo (dato del tipo true/false),  el método “mostrarMensaje” mostrará por consola el mensaje “soy un Administrativo”
Crear una clase Operario con el atributo “área”  el método “mostrarMensaje” mostrará por consola el mensaje “soy un Operario”


Instanciar un objeto y luego compilar el typescript a js.
 
2. Crear la clase Animal con dos propiedades: nombre y el atributo opcional tipo, con un método “alimentar”
Crear 2 clases hijas, Loro , que además contará con un atributo “peso” y la clase Canario.
El método alimentar del Loro devolverá un mensaje con la cantidad de alimento que se le debe suminstrar, el alimento debe ser un 5% del peso del loro., pero si es tipo “Barranquero” el alimento es el 6.5% del peso.
El método alimentar del Canario devolverá un mensaje con la cantidad de alimento que se le debe suminstrar, el alimento debe ser un 15% del peso del canario. 
 
3. El mismo enunciado del ejercicio 2, PERO el métodod  “alimentar”, debe ser abstracto.

4. Crear una interfaz Inmueble, con las propiedades tipo, metrosCuadrados, dirección y un método sin implementar, llamado “Alquilar”, que mostrará el precio de alquiler.

5. Crear una interfaz Local, con las propiedades metrosCuadrados y dirección, crear otra interfaz llamada Vivienda que extienda de Local y además tenga las propiedades cantidadHabitaciones, y barrio.
Crear un Local, una Vivienda.

6. Crear una interfaz Postre, con las propiedades, nombre y precio, además tiene el método mostrarPrecio, que muestra el precio con un descuento del 15%.
Crear una clase Menu que implementa Postre , con las propiedades entrada, plato principaly costo.
Instanciar un objeto Menu.
