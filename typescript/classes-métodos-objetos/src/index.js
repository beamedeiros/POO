"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var pessoa_1 = require("./pessoa");
var telefone_1 = require("./telefone");
var prompt = (0, prompt_sync_1["default"])();
var nome = prompt('por favor digite o nome da pessoa: ');
var pessoazinha = new pessoa_1["default"](nome, '40', new telefone_1["default"]('12', '991425611'));
console.log(pessoazinha);
