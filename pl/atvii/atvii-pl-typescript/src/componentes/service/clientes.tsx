import { Component } from "react";
import CSS from 'csstype'
import editar from '../../Icons/editar.png'
import excluir from '../../Icons/excluir.png'

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

export default class Clientes extends Component<any> {
    render() {
        return (
            <div>
                <nav className="">
                    <div className="nav-wrapper" style={backgroundColor} >
                        <a className="brand-logo" style={fontStyle} href="/Home">🤍PetLovers</a>
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
                <br />
                <div className='container'>
                    <h5 className="center-align">Cliente</h5>
                    <table className='highlight centered'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Nome social</th>
                                <th>CPF</th>
                                <th>Data de emissão</th>
                                <th>Telefone</th>
                                <th>Produto</th>
                                <th>Serviço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>... </td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td><span><img src={editar} style={ImagemStyle} /></span> <span><img src={excluir} style={ImagemStyle} /></span> </td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                </div>
            </div>
        )
    }
}