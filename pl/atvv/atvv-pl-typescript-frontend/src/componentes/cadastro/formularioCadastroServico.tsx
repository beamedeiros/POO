import { useState, useEffect } from "react";
import CSS from 'csstype'
import ServicoService from "../../services/servicoService"
import { useParams, Link } from "react-router-dom";

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default function FormularioCadastroServico() {
    const [servicos, setServicos] = useState({
        "nome": '',
        "valor": 0
    })

    const { nome } = useParams()

    const saveServ = async () => {
        const data = {
            nome: servicos.nome,
            valor: servicos.valor,
        }
        await ServicoService.create(data)
        console.log('Serviço criado com sucesso!');
    }

    useEffect(() => {
        if (nome) {
            fetchServDetails()
        }
    }, [])

    const fetchServDetails = async () => {
        try {
            const response = await ServicoService.getById(nome)
            setServicos({
                ...servicos,
                nome: response.data.nome,
                valor: response.data.valor
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const updateServ = async () => {
        const data = {
            nome: servicos.nome,
            valor: servicos.valor
        }
        await ServicoService.update(nome, data)
        console.log('Serviço atualizado com sucesso!');
    }

    const deleteServ = async () => {
        await ServicoService.remove(nome)
        console.log('Serviço excluído com sucesso!');
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
            <br />
            <div className='container'>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6">
                                <label>Nome</label>
                                <input id="nome_servico" type="text" className="validate" value={servicos.nome} onChange={e => { setServicos({ ...servicos, nome: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Valor</label>
                                <input id="valor" type="number" className="validate" value={servicos.valor} onChange={e => { setServicos({ ...servicos, valor: e.target.valueAsNumber }) }} />
                            </div>
                        </div>
                        {!nome ? (
                            <div className="row">
                                <div className="col s12">
                                    <button onClick={saveServ} className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Serviço
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                                <div className="col">
                                    <button onClick={updateServ} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/servicos`}>
                                            Editar Serviço
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button onClick={deleteServ} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/servicos`}>
                                            Excluir Serviço
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )

}