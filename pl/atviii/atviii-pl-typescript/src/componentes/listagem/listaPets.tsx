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
const fontcolor: CSS.Properties = {
    color: '#000',
    backgroundColor: '#EEEEEE'
}

export default function ListaPet() {
    const [pets, setPets] = useState([
        {
            "id": 1,
            "nome": "Lili"
        },
        {
            "id": 2,
            "nome": "Luci"
        },
        {
            "id": 3,
            "nome": "Belinha"
        },
        {
            "id": 4,
            "nome": "Salem"
        },
        {
            "id": 5,
            "nome": "Pipoca"
        },
    ])
    return (
        <div>
            <nav className="">
                <div className="nav-wrapper" style={backgroundColor} >
                    <a className="brand-logo" style={fontStyle} href="/Home">🤍PetLovers</a>
                    <div id="nav-mobile" className='right hide-on-med-and-down'>
                        <a style={botaoStyle} href="/Home">Home</a>
                        <a style={botaoStyle} href="/listaCliente">Cliente</a>
                        <a style={botaoStyle} href="/listaProduto">Produto</a>
                        <a style={botaoStyle} href="/listaPets">Pets</a>
                        <a style={botaoStyle} href="/listaServicos">Serviços</a>
                        <a style={botaoStyle} href="/Listagens">Listagens</a>
                    </div>
                </div>
            </nav>
            <br />
            {pets.map((element, index) => {
                return (
                    <div className='container'>
                        <div className="collection" key={index}>
                            <a className="collection-item" style={fontcolor} href={`/pets/:id${element.id}`}>{element.nome}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
