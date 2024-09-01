"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Administrativo = /** @class */ (function (_super) {
    __extends(Administrativo, _super);
    function Administrativo(nombre, apellido, correo, _edad, _activo) {
        var _this = _super.call(this, nombre, apellido, correo) || this;
        _this._edad = _edad;
        _this._activo = _activo;
        _this._edad = _edad;
        _this._activo = _activo;
        return _this;
    }
    Object.defineProperty(Administrativo.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Administrativo.prototype, "activo", {
        get: function () {
            return this._activo;
        },
        set: function (activo) {
            this._activo = activo;
        },
        enumerable: false,
        configurable: true
    });
    Administrativo.prototype.mostrarMensaje = function () {
        console.log('soy un Administrativo');
    };
    return Administrativo;
}(Persona_1.default));
exports.default = Administrativo;
