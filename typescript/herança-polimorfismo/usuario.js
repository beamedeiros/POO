"use strict";
exports.__esModule = true;
var Usuario = /** @class */ (function () {
    function Usuario(nome) {
        this.nome = nome;
    }
    Usuario.prototype.fazerLogin = function () {
        console.log('Tentando fazer login...');
    };
    return Usuario;
}());
exports["default"] = Usuario;
