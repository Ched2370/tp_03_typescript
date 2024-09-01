"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(_nombre, _apellido, _correo) {
        this._nombre = _nombre;
        this._apellido = _apellido;
        this._correo = _correo;
        this._nombre = _nombre;
        this._apellido = _apellido;
        this._correo = _correo;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (apellido) {
            this._apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "correo", {
        get: function () {
            return this._correo;
        },
        set: function (correo) {
            this.correo = correo;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.mostrarMensaje = function () {
        console.log('msg: ');
    };
    return Persona;
}());
exports.default = Persona;
