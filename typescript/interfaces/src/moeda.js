"use strict";
exports.__esModule = true;
var Moeda = /** @class */ (function () {
    function Moeda(valor) {
        this.valor = valor;
    }
    Object.defineProperty(Moeda.prototype, "pegarValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Moeda;
}());
exports["default"] = Moeda;
