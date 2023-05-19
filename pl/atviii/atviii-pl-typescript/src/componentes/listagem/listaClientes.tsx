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

export default function ListaCliente() {
    const [clientes, setClientes] = useState([
        {
            "id": 1,
            "nome": "Eduardo"
        },
        {
            "id": 2,
            "nome": "Juliana"
        },
        {
            "id": 3,
            "nome": "Emanuel"
        },
        {
            "id": 4,
            "nome": "Fernando"
        },
        {
            "id": 5,
            "nome": "Gildárcio"
        }
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
            {clientes.map((element, index) => {
                return (
                    <div className='container' >
                        <div className="collection" key={index}>
                            <a className="collection-item" style={fontcolor} href={`/clientes/:id${element.id}`}>{element.nome}</a>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}