"use strict";
exports.__esModule = true;
var FormatoBrasil = /** @class */ (function () {
    function FormatoBrasil(data) {
        this.data = data;
    }
    FormatoBrasil.prototype.formatar = function () {
        return "".concat(this.data.pegarData.getDay(), "/").concat(this.data.pegarData.getMonth(), "/").concat(this.data.pegarData.getFullYear());
    };
    return FormatoBrasil;
}());
exports["default"] = FormatoBrasil;
