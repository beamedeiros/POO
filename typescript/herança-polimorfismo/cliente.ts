import Usuario from "./usuario";

export default class Cliente extends Usuario {
    public imprimir() {
        console.log(`Nome: ${this.nome}`)
    }
}