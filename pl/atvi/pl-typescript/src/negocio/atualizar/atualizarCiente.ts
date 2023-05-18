import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import Atualizar from "./atualizar";

export default class AtualizarCliente extends Atualizar<Cliente> {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(id: number, objeto: Cliente): Cliente | null {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);
        if (index === -1) {
            
        }
    }
}