import { useState, useEffect } from "react";
import CSS from 'csstype'
import PetService from "../../services/petService";

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontcolor: CSS.Properties = {
    color: '#000',
    backgroundColor: '#EEEEEE'
}

export default function ListaPet() {
    const [pets, setPets] = useState<any[]>([])

    useEffect(() => {
        fetchPets()
    }, [])

    const fetchPets = async () => {
        try {
            const response = await PetService.getAll()
            setPets(response.data);
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

                <div>
                    <h5 className="center-align">Pets</h5>
                    <table className='highlight centered'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Raça</th>
                                <th>Gênero</th>
                            </tr>
                        </thead>
                        {pets.map((pet) => {
                            return (
                                <tbody key={pet.nome}>
                                    <tr>
                                        <td>{pet.nome}</td>
                                        <td>{pet.tipo}</td>
                                        <td>{pet.raca}</td>
                                        <td>{pet.genero}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}
