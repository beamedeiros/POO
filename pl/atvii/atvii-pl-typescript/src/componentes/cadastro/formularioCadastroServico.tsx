import { Component } from "react";
import CSS from 'csstype'

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default class FormularioCadastroServico extends Component<any> {
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
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nome_servico" type="text" className="validate" />
                                    <label htmlFor="nome_servico">Nome do Serviço</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="descricao" type="text" className="validate" />
                                    <label htmlFor="descricao">Descrição</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Serviço
                                        <i className="material-icons right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}