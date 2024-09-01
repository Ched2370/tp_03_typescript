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
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario(_nombre, _apellido, _correo, _area) {
        var _this = _super.call(this, _nombre, _apellido, _correo) || this;
        _this._area = _area;
        _this._area = _area;
        return _this;
    }
    Object.defineProperty(Operario.prototype, "area", {
        get: function () {
            return this._area;
        },
        set: function (area) {
            this._area = area;
        },
        enumerable: false,
        configurable: true
    });
    Operario.prototype.mostrarMensaje = function () {
        console.log('soy un Operario');
    };
    return Operario;
}(Persona_1.default));
exports.default = Operario;
