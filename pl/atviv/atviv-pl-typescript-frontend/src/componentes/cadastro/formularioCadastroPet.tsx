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

export default function FormularioCadastroPet() {
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [raca, setRaca] = useState('')
    const [genero, setGenero] = useState('')
    const [cpfCli, setCpfCli] = useState('')

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
                                <label>CPF do Cliente</label>
                                <input id="cpf_cli" type="text" className="validate" value={cpfCli} onChange={e => { setCpfCli(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <label>Nome</label>
                                <input id="nome_pet" type="text" className="validate" value={nome} onChange={e => { setNome(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Tipo</label>
                                <input id="tipo" type="text" className="validate" value={tipo} onChange={e => { setTipo(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Raça</label>
                                <input id="raca" type="text" className="validate" value={raca} onChange={e => { setRaca(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Gênero</label>
                                <input id="genero" type="text" className="validate" value={genero} onChange={e => { setGenero(e.target.value) }} />
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