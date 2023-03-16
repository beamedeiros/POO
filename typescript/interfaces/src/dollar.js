"use strict";
exports.__esModule = true;
var Dollar = /** @class */ (function () {
    function Dollar(moeda) {
        this.moeda = moeda;
    }
    Dollar.prototype.formatar = function () {
        return "US$ ".concat(this.moeda.pegarValor);
    };
    return Dollar;
}());
exports["default"] = Dollar;
