import { Component } from "react";
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
export default class FormularioCadastroCliente extends Component<any, props> {
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        let estilo = `${this.props.tema}`
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
                <br />
                <div className='container'>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nome_cliente" type="text" className="validate" />
                                    <label htmlFor="nome_cliente">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="nome_social" type="text" className="validate" />
                                    <label htmlFor="nome_social">Nome social</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="cpf" type="text" className="validate" />
                                    <label htmlFor="cpf">CPF</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="data" type="text" className="validate" />
                                    <label htmlFor="data">Data de emissão</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="telefone" type="text" className="validate" />
                                    <label htmlFor="data">Telefone</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Cliente
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