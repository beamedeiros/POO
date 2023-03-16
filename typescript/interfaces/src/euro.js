"use strict";
exports.__esModule = true;
var Euro = /** @class */ (function () {
    function Euro(moeda) {
        this.moeda = moeda;
    }
    Euro.prototype.formatar = function () {
        return "\u20AC ".concat(this.moeda.pegarValor);
    };
    return Euro;
}());
exports["default"] = Euro;
