import Armazem from "./armazem";
import Produto from "./produto";

let arm = new Armazem<Produto> ()

let prod = new Produto()
prod.nome = `miojo` 

console.log(prod.nome)