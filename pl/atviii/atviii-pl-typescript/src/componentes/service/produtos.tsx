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

export default function Produtos() {
    const produtos = [
        {
            "id": 1,
            "nome": "BelaVitae",
            "descricao": "Shampoo",
            "valor": 12.00
        },
        {
            "id": 2,
            "nome": "BelaVitae",
            "descricao": "Condicionador",
            "valor": 14.00
        },
        {
            "id": 3,
            "nome": "Macarena",
            "descricao": "Roupa para cachorro",
            "valor": 50.90
        },
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
            <div className='container'>
                <h5 className="center-align">Produtos</h5>
                <table className='highlight centered'>
                    <thead>
                        <tr>
                            <th>Nome Produto</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {produtos.map((element, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.descricao}</td>
                                    <td>R${element.valor}</td>
                                    <td>
                                        <Link to={`/formularioCadastroProduto/:id${element.id}`}>
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