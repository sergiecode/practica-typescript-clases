"use strict";
// La clase es una especie de molde (para hacer muchos negocios desde el molde)
class Negocio {
    constructor(// Es un método que recibe parámetros y se utiliza para instanciar un negocio
    nombre, // este nombre es el que le paso al constructor
    direccion, telefono) {
        this.nombre = nombre; // el nombre que le paso al constructor lo asigno al "nombre" de la clase
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getAbierto() {
        return this.abierto;
    }
    setAbierto(abierto) {
        this.abierto = abierto;
    }
    estaAbierto() {
        const horaActual = new Date().getHours();
        const horaAbre = 8;
        const horaCierra = 20;
        if (horaActual >= horaAbre && horaActual < horaCierra) {
            this.setAbierto(true);
            return 'Esta Abierto';
        }
        else {
            this.setAbierto(false);
            return 'Está cerrado';
        }
    }
   function BorrarUltimoCaracter() {
      const valorPantalla = document.getElementById('pantalla').value;
      document.getElementById('pantalla').value = valorPantalla.slice(0,-2)
  }

    }
}
// Acá instanciamos (se crea) un negocio peluquería con los siguientes atributos:
// Los 3 datos que le paso son los que recibe el constructor
const peluqueria = new Negocio('Tijeras', 'Scabritney 123', 1198765412);
