import { useState } from "react";
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

export default function FormularioCadastroCliente() {
    const [nome, setNome] = useState('')
    const [nomeSocial, setNomeSocial] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataEmissao, setDataEmissao] = useState('')
    const [telefone, setTelefone] = useState('')

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
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6">
                                <label>Nome:</label>
                                <input id="nome_cliente" type="text" className="validate" value={nome} onChange={e => { setNome(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Nome social:</label>
                                <input id="nome_social" type="text" className="validate" value={nomeSocial} onChange={e => { setNomeSocial(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <label>CPF</label>
                                <input id="cpf" type="text" className="validate" value={cpf} onChange={e => { setCpf(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Data de emissão</label>
                                <input id="data" type="text" className="validate" value={dataEmissao} onChange={e => { setDataEmissao(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <label>Telefone</label>
                                <input id="telefone" type="text" className="validate" value={telefone} onChange={e => { setTelefone(e.target.value) }} />
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