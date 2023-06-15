import { useState, useEffect } from "react";
import CSS from 'csstype'
import { useParams, Link } from "react-router-dom";
import ClienteService from "../../services/clienteService";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}

const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'
}

export default function ListaCompras() {
    const [clientes, setClientes] = useState<any[]>([])
    const { cpf } = useParams()

    useEffect(() => {
        fetchClientDetails()
    }, [])

    const fetchClientDetails = async () => {
        try {
            const response = await ClienteService.getById(cpf)
            setClientes([response.data])
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    return (
        <div>
            <nav className="">
                <div className="nav-wrapper" style={backgroundColor} >
                    <a className="brand-logo" style={fontStyle} href="/Home">🤍PetLovers</a>
                    <div id="nav-mobile" className='right hide-on-med-and-down'>
                        <a style={botaoStyle} href="/Home">Home</a>
                        <a style={botaoStyle} href="/clientes">Cliente</a>
                        <a style={botaoStyle} href="/produtos">Produto</a>
                        <a style={botaoStyle} href="/pets">Pets</a>
                        <a style={botaoStyle} href="/servicos">Serviços</a>
                        <a style={botaoStyle} href="/Listagens">Listagens</a>
                    </div>
                </div>
            </nav>
            <br />
            {clientes.map((element, index) => {
                return (
                    <div className='container'>
                        <Tabs>
                    <TabList>
                        <Tab>Produto</Tab>
                        <Tab>Serviço</Tab>
                    </TabList>
                    <TabPanel>
                        <table className='highlight centered'>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            {element.produtosConsumidos ? (element.produtosConsumidos.map((prod: any) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>
                                                {prod.service.nome}
                                            </td>
                                            <td>
                                                {prod.qtd}
                                            </td>
                                            <td>R$
                                                {prod.service.valor}
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })): "nenhuma compra de produtos cadastrada"}
                        </table>
                        </TabPanel>
                    <TabPanel>
                        <table className='highlight centered'>
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Quantidade</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            {element.servicosConsumidos ? (element.servicosConsumidos.map((serv: any) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>
                                                {serv.service.nome}
                                            </td>
                                            <td>
                                                {serv.qtd}
                                            </td>
                                            <td>R$
                                                {serv.service.valor}
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })): "nenhuma compra de serviços cadastrada"}
                        </table>
                        </TabPanel>
                    </Tabs>
                        <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                            <div className="col">
                                <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                    <Link style={{ color: "#ffffff" }} to={`/clientes/${element.cpf.valor}`}>
                                        Voltar
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}