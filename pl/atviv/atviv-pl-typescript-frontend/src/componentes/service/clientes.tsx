import { useState, useRef, useEffect } from "react";
import CSS from 'csstype'
import editar from '../../Icons/editar.png'
import excluir from '../../Icons/excluir.png'
import { Link, useParams } from "react-router-dom";
import ClienteService from "../../services/clienteService";

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default function Clientes() {
    const [clientes, setClientes] = useState<any[]>([])
    const { id } = useParams()

    useEffect(() => {
        fetchClientDetails()
    }, [])

    const fetchClientDetails = async () => {
        try {
            const response = await ClienteService.getById(id)
            setClientes([response.data])
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const deleteClient = async () => {
        await ClienteService.remove(id)
        console.log('Cliente excluído com sucesso!');
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
                {clientes.map((element, index) => {
                    return (
                        <>
                            <h5> Cliente: {element.nome}</h5>
                            <table className='highlight centered'>
                                <thead>
                                    <tr>
                                        <th>Nome social</th>
                                        <th>Email</th>
                                        <th>Telefones</th>
                                    </tr>
                                </thead>
                                <tbody key={element.id}>
                                    <tr>
                                        <td>{element.nomeSocial}</td>
                                        <td>{element.email}</td>
                                        <td>
                                            {element.telefones.map((telefone: any) => (
                                                <div key={telefone.id}>
                                                    ({telefone.ddd}) {telefone.numero}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <h6>Endereço</h6>
                            <table className='highlight centered'>
                                <thead>
                                    <tr>
                                        <th>Estado</th>
                                        <th>Cidade</th>
                                        <th>Bairro</th>
                                        <th>Rua</th>
                                        <th>Número</th>
                                        <th>CEP</th>
                                    </tr>
                                </thead>
                                <tbody key={element.endereco.id}>
                                    <tr>
                                        <td>{element.endereco.estado}</td>
                                        <td>{element.endereco.cidade}</td>
                                        <td>{element.endereco.bairro}</td>
                                        <td>{element.endereco.rua}</td>
                                        <td>{element.endereco.numero}</td>
                                        <td>{element.endereco.codigoPostal}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <label>Informações Adicionais: </label>
                            <label>{element.endereco.informacoesAdicionais}</label>

                            <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                                <div className="col">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/formularioCadastroCliente/${element.id}`}>
                                            Editar Cliente
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action" onClick={deleteClient}>
                                        <Link style={{ color: "#ffffff" }} to={`/clientes`}>
                                            Excluir Cliente
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <br />
        </div >
    )
}