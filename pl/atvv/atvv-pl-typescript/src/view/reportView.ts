import clienteController from "../controller/clienteController"
import clienteInt from "../controller/clienteInt"
import petController from "../controller/petController"
import produtoController from "../controller/produtoController"
import serviceController from "../controller/serviceController"
import compra from "../models/compra"
import { RequestHandler } from 'express'

const cController: clienteInt = new clienteController()

export const topPet:RequestHandler = (req, res)=>{
    let data:any[] = []
    let clientes = cController.index()
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
    res.send(data).status(200)  
}

export const topTenClient:RequestHandler = (req,res)=>{
    let data: any[] = []
    let clientes = cController.index()
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
    res.send(data).status(200)  
}

export const topFiveClient:RequestHandler = (req,res)=>{
    let data: any[] = []
    let clientes = cController.index()
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
    res.send(data).status(200)
}

export const topServices:RequestHandler = (req,res)=>{
    let clientes = cController.index()
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
    res.send(data).status(200)
}
