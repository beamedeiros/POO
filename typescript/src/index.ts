import promptSync from "prompt-sync";

import Pessoa from "./pessoa";
import Telefone from "./telefone";

let prompt = promptSync();
let nome = prompt('por favor digite o nome da pessoa: ')

let pessoazinha = new Pessoa(nome, '40', new Telefone('12', '991425611'))

console.log(pessoazinha)