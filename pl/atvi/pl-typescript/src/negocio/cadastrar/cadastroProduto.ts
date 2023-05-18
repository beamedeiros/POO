import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produtos`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do produto: `)
        let valor = this.entrada.receberTexto(`Por favor informe o valor do produto: `)
        let produto = new Produto(nome, tipo, valor);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}