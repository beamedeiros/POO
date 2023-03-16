import Formatador from "./formatador";
import Moeda from "./moeda";

export default class Euro implements Formatador {
    private moeda: Moeda
    constructor(moeda: Moeda){
        this.moeda = moeda
    }
    formatar(): string {
        return `€ ${this.moeda.pegarValor}`
    }
    
}