import { useState, useEffect } from "react";
import CSS from 'csstype'
import 'materialize-css/dist/css/materialize.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default function FormularioCadastroCompra() {
    const [servico, setServ] = useState({
        "cpf": '',
        "servico": '',
        "pet": ''
    })
    console.log([servico])
    const [produto, setProd] = useState({
        "cpf": '',
        "produto": '',
        "pet": ''
    });
    console.log(produto)

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
            <div className='container'>
                <Tabs>
                    <TabList>
                        <Tab>Serviço</Tab>
                        <Tab>Produto</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s6">
                                        <label>CPF do Cliente</label>
                                        <input id="cpf_cli" type="text" className="validate" value={servico.cpf} onChange={e => { setServ({ ...servico, cpf: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <label>Serviço</label>
                                        <input id="servico" type="text" className="validate" value={servico.servico} onChange={e => { setServ({ ...servico, servico: e.target.value }) }} />
                                    </div>
                                    <div className="col s6">
                                        <label>Nome do Pet</label>
                                        <input id="pet" type="text" className="validate" value={servico.pet} onChange={e => { setServ({ ...servico, pet: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                            <Link style={{ color: "#ffffff" }} to={`/compra/servico/${servico.cpf}/${servico.servico}/${servico.pet}`}>
                                                Continuar Compra
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s6">
                                        <label>CPF do Cliente</label>
                                        <input id="cpf_cli" type="text" className="validate" value={produto.cpf} onChange={e => { setProd({ ...produto, cpf: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <label>Produto</label>
                                        <input id="produto" type="text" className="validate" value={produto.produto} onChange={e => { setProd({ ...produto, produto: e.target.value }) }} />
                                    </div>
                                    <div className="col s6">
                                        <label>Nome do Pet</label>
                                        <input id="pet" type="text" className="validate" value={produto.pet} onChange={e => { setProd({ ...produto, pet: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                            <Link style={{ color: "#ffffff" }} to={`/compra/produto/${produto.cpf}/${produto.produto}/${produto.pet}`}>
                                                Continuar Compra
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
