"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const pessoa_1 = __importDefault(require("./pessoa"));
const telefone_1 = __importDefault(require("./telefone"));
let prompt = (0, prompt_sync_1.default)();
let nome = prompt('por favor digite o nome da pessoa: ');
let pessoazinha = new pessoa_1.default(nome, '40', new telefone_1.default('12', '991425611'));
console.log(pessoazinha);
