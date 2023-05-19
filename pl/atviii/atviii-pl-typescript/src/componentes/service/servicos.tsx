import { useState } from "react";
import CSS from 'csstype'
import editar from '../../Icons/editar.png'
import excluir from '../../Icons/excluir.png'
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
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'
}

export default function Servicos() {
    const [servicos, setProdutos] = useState([
        {
            "id": 1,
            "nome": "Banho",
            "descricao": "Banho em pets",
            "valor": 90.00
        },
        {
            "id": 2,
            "nome": "Tosa",
            "descricao": "Corte de unha e pêlo",
            "valor": 145.00
        }
    ])
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
                            <th>Nome do Serviço</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {servicos.map((element, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.descricao}</td>
                                    <td>R${element.valor}</td>
                                    <td>
                                        <Link to={`/formularioCadastroServico/:id${element.id}`}>
                                            <img src={editar} alt="" style={ImagemStyle} />
                                        </Link>
                                        <img src={excluir} alt="" style={ImagemStyle} />
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