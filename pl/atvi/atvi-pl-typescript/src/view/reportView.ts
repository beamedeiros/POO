import clienteController from "../controller/clienteController"
import clienteInt from "../controller/clienteInt"
import petController from "../controller/petController"
import produtoController from "../controller/produtoController"
import serviceController from "../controller/serviceController"
import Entrada from "../io/entrada"
import compra from "../models/compra"

export default class reportView{
    private entrada: Entrada
    private clienteController: clienteInt = new clienteController()
    private petController: petController = new petController()
    private produtoController: produtoController = new produtoController()
    private servicoController: serviceController = new serviceController()
    constructor() {
        this.entrada = new Entrada()
    }
    public topPet(){
        let data:any[] = []
        let clientes = this.clienteController.index()
        clientes.forEach(cli=>{
          let services = cli.getServicosConsumidos.concat(cli.getProdutosConsumidos)
          services.forEach(s=>{
            let find = data.find(f=>(f.tipo == s.getTipo && f.raca == s.getRaca && f.service == s.getService.getNome))
            if(find==null){
                data.push({"tipo":s.getTipo,"raca":s.getRaca,"service":s.getService.getNome,"qtd":s.getQtd})
            }else{
                find.qtd += s.getQtd.valueOf()
            }
          })  
        })
        console.log("\nTop Services por raca e tipo\n")
        data.forEach(d=>{
            console.log("Tipo: "+d.tipo+" | Raca: "+d.raca+" | Servico/Produto: "+d.service+" | Quantidade: "+d.qtd)
        })
    }

    public topTenClient(){
        let data: any[] = []
        let clientes = this.clienteController.index()
        clientes.forEach(cli=>{
            let services = 0
            cli.getServicosConsumidos.forEach(i=>{
                services += i.getQtd.valueOf()
            })
            cli.getProdutosConsumidos.forEach(i=>{
                services += i.getQtd.valueOf()
            })
            data.push({"nome":cli.getNome,"nomeSocial":cli.getNomeSocial,"cpf":cli.getCpf.getValor,"services":services})
        })
        data = data.sort((a,b)=>{
            return b.services-a.services
        })
        data = data.slice(0,10)
        console.log("\nTop 10 clientes que mais compram (quantidade)\n")
        data.forEach(dt=>{
            console.log("Nome: "+dt.nome+" | Nome Social: "+dt.nomeSocial+" | CPF: "+dt.cpf+" | Total de compras: "+dt.services)
        })
    }
    public topFiveClient(){
        let data: any[] = []
        let clientes = this.clienteController.index()
        clientes.forEach(cli=>{
            let valor = 0
            cli.getServicosConsumidos.forEach(i=>{
                valor += i.getQtd.valueOf()*i.getService.getValor.valueOf()
            })
            cli.getProdutosConsumidos.forEach(i=>{
                valor += i.getQtd.valueOf()*i.getService.getValor.valueOf()
            })
            data.push({"nome":cli.getNome,"nomeSocial":cli.getNomeSocial,"cpf":cli.getCpf.getValor,"valor":valor})
        })
        data = data.sort((a,b)=>{
            return b.valor-a.valor
        })
        data = data.slice(0,5)
        console.log("\nTop 5 clientes que mais compram (valor)\n")
        data.forEach(dt=>{
            console.log("Nome: "+dt.nome+" | Nome Social: "+dt.nomeSocial+" | CPF: "+dt.cpf+" | Valor: "+dt.valor)
        })
    }
    public topServices(){
        let clientes = this.clienteController.index()
        let data:Array<compra> = []
        clientes.forEach(cli=>{
            let services = cli.getProdutosConsumidos.concat(cli.getServicosConsumidos)
            services.forEach(pro=>{
                let x = data.find(d => d.getService.getNome === pro.getService.getNome);
                if (x == null) {
                    data.push(pro);
                } else {
                    x.addQtd(pro.getQtd)
                }
            })
        })
        data = data.sort((a,b)=>{
            return b.getQtd.valueOf()-a.getQtd.valueOf()
        })
        console.log("\nProdutos/Serviços mais consumidos\n")
        data.forEach(dt=>{
            let total = dt.getQtd.valueOf()*dt.getService.getValor.valueOf()
            console.log("Nome: "+dt.getService.getNome+" | Quantidade total: "+dt.getQtd+" | Valor: "+dt.getService.getValor+" | Total: "+total)
        })
    }
}