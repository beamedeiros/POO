import { useEffect, useState } from "react";
import CSS from 'csstype'
import ClienteService from "../../services/clienteService";
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
const fontcolor: CSS.Properties = {
    color: '#000',
    backgroundColor: '#EEEEEE'
}

export default function ListaCliente() {
    const [clientes, setClientes] = useState<any[]>([])

    useEffect(() => {
        fetchClientes()
    }, [])

    const fetchClientes = async () => {
        try {
            const response = await ClienteService.getAll()
            setClientes(response.data);
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
            {clientes.map((element) => {
                return (
                    <div className='container' key={element.cpf.valor}>
                        <div className="collection">
                            <Link className="collection-item" style={fontcolor} to={`/clientes/${element.cpf.valor}`} >{element.nome}</Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}