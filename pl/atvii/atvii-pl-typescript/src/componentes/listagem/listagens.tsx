import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'

type props = {
    tema: string
}
const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}

const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontcolor: CSS.Properties = {
    color: '#000',
    backgroundColor: '#EEEEEE'
}

export default class Listagens extends Component<any> {
    // componentDidMount() {
    //     console.log(M);
    //     M.AutoInit();
    // }
    render() {
        return (
            <div>
                <>
                    <nav className="">
                        <div className="nav-wrapper" style={backgroundColor} >
                            <a className="brand-logo" style={fontStyle}>🤍PetLovers</a>
                            <div id="nav-mobile" className='right hide-on-med-and-down'>
                            <a style={botaoStyle} href="/Home">Home</a>
                                <a style={botaoStyle} href="/listaCliente">Cliente</a>
                                <a style={botaoStyle} href="/listaProduto">Produto</a>
                                <a style={botaoStyle} href="/listaPets">Pets</a>
                                <a style={botaoStyle} href="/listaServicos">Serviços</a>
                                <a style={botaoStyle} href="/Listagens">Listagens</a>
                            </div>
                        </div>
                    </nav>
                </>
                <div className='container center'>
                    <h4> <strong> Listagens de Consumo </strong> </h4>
                    <br></br>
                    <div className="row">
                        <div className="">
                            <ul className="tabs-swipe-demo tabs tabsConsumo ">

                                <li className="tab col s2"><a href="#1" style={{ color: 'black', }}>Cliente Qtd</a></li>
                                <li className="tab col s2"><a href="#2" style={{ color: 'black', }}>Cliente Valor</a></li>
                                <li className="tab col s4"><a href="#3" style={{ color: 'black', }}>Produtos/Serviços Mais Consumidos</a></li>
                                <li className="tab col s4"><a href="#4" style={{ color: 'black', }}>Consumo Por Tipo/Raça De Pet</a></li>
                            </ul>
                        </div>
                        <div id="1" className="col s12">
                            <form>
                                <div>
                                    <h5>Clientes com maior quantidade de consumo</h5>
                                    <table className='responsive-table centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Nome social</th>
                                                <th>CPF</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cliente 1</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 2</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 3</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 4</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 5</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 6</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 7</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 8</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 9</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 10</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>

                        <br />


                        <div id="2" className="col s12">
                            <form>
                                <div>
                                    <h5>Clientes com maior valor de consumo</h5>
                                    <table className='responsive-table centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Nome social</th>
                                                <th>CPF</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cliente 1</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 2</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 3</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 4</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente 5</td>
                                                <td>Cliente</td>
                                                <td>000.000.000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>

                        </div>

                        <div id="3" className="col s12">
                            <form>
                                <div>
                                <h5>Produtos e Serviços Mais Consumidos</h5>
                                    <table className='responsive-table centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Valor</th>
                                                <th>Total consumido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Banho</td>
                                                <td>R$60,00</td>
                                                <td>9</td>
                                            </tr>
                                            <tr>
                                                <td>Shampoo</td>
                                                <td>R$90.00</td>
                                                <td>15</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>

                        </div>
                        <div id="4" className="col s12">
                            <form>
                                <h5 className='racaConsumoFont'>Tipo</h5>
                                <div>
                                    <table className='responsive-table centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome do Produto/Serviço</th>
                                                <th>Valor do Produto/Serviço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>...</td>
                                                <td>...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <br></br>
                                <h5 className='racaConsumoFont'>Raça</h5>
                                <div>
                                    <table className='responsive-table centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome do Produto/Serviço</th>
                                                <th>Valor do Produto/Serviço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>...</td>
                                                <td>...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}