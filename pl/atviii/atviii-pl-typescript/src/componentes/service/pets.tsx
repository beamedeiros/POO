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

export default function Pets() {
    const pets = [
        {
            "id": 1,
            "nome": "Lili",
            "tipo": "cachorro",
            "raca": "",
            "genero": "F"

        },
        {
            "id": 2,
            "nome": "Luci",
            "tipo": "gato",
            "raca": "",
            "genero": "M"
        },
        {
            "id": 3,
            "nome": "Belinha",
            "tipo": "cachorro",
            "raca": "",
            "genero": "F"
        },
        {
            "id": 4,
            "nome": "Salem",
            "tipo": "gato",
            "raca": "",
            "genero": "M"
        },
        {
            "id": 5,
            "nome": "Pipoca",
            "tipo": "porquinho da índia",
            "raca": "",
            "genero": "F"
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
                <h5 className="center-align">Pets</h5>
                <table className='highlight centered'>
                    <thead>
                        <tr>
                            <th>Nome do Pet</th>
                            <th>Tipo</th>
                            <th>Raça</th>
                            <th>Gênero</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {pets.map((element) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.tipo}</td>
                                    <td>{element.raca}</td>
                                    <td>{element.genero}</td>
                                    <td>
                                        <Link to={`/formularioCadastroPet/:id${element.id}`}>
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