import { useState, useEffect } from "react";
import CSS from 'csstype'
import { Link } from "react-router-dom";
import ServicoService from "../../services/servicoService"

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

export default function ListaServicos() {
    const [servicos, setServicos] = useState<any[]>([])

    useEffect(() => {
        fetchServicos()
    }, [])

    const fetchServicos = async () => {
        try {
            const response = await ServicoService.getAll()
            setServicos(response.data)
        } catch (error) {
            console.error('Erro: ', error)
        }
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
                <h5 className="center-align">Serviços</h5>
                <table className='highlight centered'>
                    <thead>
                        <tr>
                            <th>Nome Produto</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {servicos.map((element, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>R${element.valor}</td>
                                    <td>
                                        <Link style={{ color: "#FFC100" }} to={`/formularioCadastroServico/${element.nome}`}>
                                            mais detalhes
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>

            </div>
        </div>
    )

}