"use strict";
exports.__esModule = true;
var FormatoUSA = /** @class */ (function () {
    function FormatoUSA(data) {
        this.data = data;
    }
    FormatoUSA.prototype.formatar = function () {
        return "".concat(this.data.pegarData.getMonth(), "/").concat(this.data.pegarData.getDay(), "/").concat(this.data.pegarData.getFullYear());
    };
    return FormatoUSA;
}());
exports["default"] = FormatoUSA;
