import { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'
import ListaService from "../../services/listService";
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
const tabStyle: CSS.Properties = {
    color: 'white',
    backgroundColor: '#73A2B9',
    borderLeft: '6px solid white',
    height: '500px'
}

export default function Listagens() {
    const [tenClients, setTenClients] = useState<any[]>([])
    const [topServices, setTopServices] = useState<any[]>([])
    const [topPet, setTopPet] = useState<any[]>([])
    const [fiveClients, setFiveClients] = useState<any[]>([])

    useEffect(() => {
        fetchTenClient()
        fetchTopServices()
        fetchTopPets()
        fetchFiveClient()
    }, [])

    const fetchTenClient = async () => {
        try {
            const response = await ListaService.topTenClient()
            setTenClients(response.data);
        } catch (error) {
            console.error('Erro: ', error)
        }
    }

    const fetchTopServices = async () => {
        try {
            const response = await ListaService.topServices()
            setTopServices(response.data);
        } catch (error) {
            console.error('Erro: ', error)
        }
    }

    const fetchTopPets = async () => {
        try {
            const response = await ListaService.topPet()
            setTopPet(response.data);
        } catch (error) {
            console.error('Erro: ', error)
        }
    }

    const fetchFiveClient = async () => {
        try {
            const response = await ListaService.topFiveClient()
            setFiveClients(response.data);
        } catch (error) {
            console.error('Erro: ', error)
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
            <div className='center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <Tabs>
                    <TabList>
                        <Tab>Clientes com maior quantidade de consumo</Tab>
                        <Tab>Clientes com maior valor de consumo</Tab>
                        <Tab>Produtos e Serviços Mais Consumidos</Tab>
                        <Tab>Produtos e Serviços consumidos por Pet</Tab>
                    </TabList>
                    <div className='container center'>
                        <div className="row">
                            <TabPanel>

                                <div className="col s12">
                                    <form>
                                        <div>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Nome social</th>
                                                        <th>CPF</th>
                                                        <th>Quantidade</th>
                                                    </tr>
                                                </thead>
                                                {tenClients.map(tc => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{tc.nome}</td>
                                                                <td>{tc.nomeSocial}</td>
                                                                <td>{tc.cpf}</td>
                                                                <td>{tc.services}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col s12">
                                    <form>
                                        <div>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Nome social</th>
                                                        <th>CPF</th>
                                                        <th>Valor Total</th>
                                                    </tr>
                                                </thead>
                                                {fiveClients.map(fc => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{fc.nome}</td>
                                                                <td>{fc.nomeSocial}</td>
                                                                <td>{fc.cpf}</td>
                                                                <td>R${fc.valor}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col s12">
                                    <form>
                                        <div>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Valor</th>
                                                        <th>Total consumido</th>
                                                    </tr>
                                                </thead>
                                                {topServices.map(s => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{s.service.nome}</td>
                                                                <td>R${s.service.valor}</td>
                                                                <td>{s.qtd}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col s12">
                                    <form>
                                        <div>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <th>Raça</th>
                                                        <th>Nome do Produto/ Serviço</th>
                                                        <th>Quantidade</th>
                                                    </tr>
                                                </thead>
                                                {topPet.map(p => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{p.tipo}</td>
                                                                <td>{p.raca}</td>
                                                                <td>{p.service}</td>
                                                                <td>{p.qtd}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>
                        </div>
                    </div >
                </Tabs >
            </div >
        </div >
    )
}