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
const fontcolor: CSS.Properties = {
    color: '#000',
    backgroundColor: '#EEEEEE'
}

export default class ListaServico extends Component<any, props> {

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
                    <div className="collection">
                        <a className="collection-item" style={fontcolor} href="/servicos">Serviço 1</a>
                        <a className="collection-item" style={fontcolor} href="/servicos">Serviço 2</a>
                        <a className="collection-item" style={fontcolor} href="/servicos">Serviço 3</a>
                    </div>
                </div>
            </div>
        )

    }
}