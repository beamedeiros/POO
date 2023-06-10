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

export default function Clientes() {
    const clientes = [
        {
            "id": 1,
            "nome": "Eduardo Sakaue",
            "nomeSocial": "Sakaue",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Roupa",
            "servico": "Banho"
        },
        {
            "id": 2,
            "nome": "Juliana Martinez",
            "nomeSocial": "Juliana",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Shampoo",
            "servico": ""
        },
        {
            "id": 3,
            "nome": "Emanuel Mineda",
            "nomeSocial": "Mineda",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Condicionador",
            "servico": "Tosa"
        },
        {
            "id": 4,
            "nome": "Fernando Masanori",
            "nomeSocial": "Masanori",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Coleira",
            "servico": "Banho"
        },
        {
            "id": 5,
            "nome": "Gildárcio Souza",
            "nomeSocial": "Gildárcio",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Laço",
            "servico": ""
        }
    ]
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
            <h5 className="center-align">Clientes</h5>
            <div className='container'>

                <table className='highlight centered'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nome social</th>
                            <th>CPF</th>
                            <th>Data de emissão</th>
                            <th>Telefone</th>
                            <th>Produto</th>
                            <th>Serviço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {clientes.map((element, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.nomeSocial}</td>
                                    <td>{element.cpf}</td>
                                    <td>{element.dataEmissao}</td>
                                    <td>{element.telefone}</td>
                                    <td>{element.produto}</td>
                                    <td>{element.servico}</td>
                                    <td>
                                        <Link to={`/formularioCadastroCliente/:id${element.id}`}>
                                            <img src={editar} alt="" style={ImagemStyle} />
                                        </Link>
                                        <img src={excluir} alt="" style={ImagemStyle} />
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                <br></br>
            </div>
        </div>
    )
}