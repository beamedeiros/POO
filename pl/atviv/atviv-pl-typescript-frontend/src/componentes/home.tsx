import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'
import { Component } from "react";
import pets from '../images/pets.svg'
import client from '../images/client.svg'
import product from '../images/products.svg'
import services from '../images/services.svg'

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
const imgStyle: CSS.Properties = {
    width: '200px',
    padding: '20px'
}
const card: CSS.Properties = {
    width: '300px',
    padding: '20px',
}
const marginBt: CSS.Properties = {
    marginBottom: '6px'
}
const displayContent: CSS.Properties = {
    display: 'flex'
}

class Home extends Component<any, props> {
    render() {
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

                <div style={displayContent}>
                    <div className="row">
                        <div className="col s6" style={card}>
                            <div className="card">
                                <div className="card-content">
                                    <img src={client} style={imgStyle} />
                                    <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroCliente">Cadastrar clientes</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s2" style={card}>
                            <div className="card">
                                <div className="card-content">

                                    <img src={product} style={imgStyle} />

                                    <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroProduto">Cadastrar produtos</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s2" style={card}>
                            <div className="card">
                                <div className="card-content">
                                    <div style={marginBt}>
                                        <img src={pets} style={imgStyle} />
                                    </div>
                                    <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroPet">Cadastrar Pets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s2" style={card}>
                            <div className="card">
                                <div className="card-content">
                                    <img src={services} style={imgStyle} />
                                    <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroServico">Cadastrar Serviço</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;