"use strict";
exports.__esModule = true;
var armazem_1 = require("./armazem");
var produto_1 = require("./produto");
var arm = new armazem_1["default"]();
var prod = new produto_1["default"]();
prod.nome = "miojo";
console.log(prod.nome);
