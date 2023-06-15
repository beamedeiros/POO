import { useState, useEffect } from "react";
import { format } from 'date-fns'
import CSS from 'csstype'
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
    const { cpf } = useParams()

    useEffect(() => {
        fetchClientDetails()
    }, [])

    const fetchClientDetails = async () => {
        try {
            const response = await ClienteService.getById(cpf)
            setClientes([response.data])
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const deleteClient = async () => {
        await ClienteService.remove(cpf)
        console.log('Cliente excluído com sucesso!')
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
                    const dataEmissaoCPF = format(new Date(element.cpf.dataEmissao), 'dd/MM/yyyy');
                    return (
                        <>
                            <h5> Cliente: {element.nome}</h5>
                            <table className='highlight centered'>
                                <thead>
                                    <tr>
                                        <th>Nome social</th>
                                        <th>CPF</th>
                                        <th>Data de Emissão</th>
                                        <th>Telefones</th>
                                    </tr>
                                </thead>
                                <tbody key={element.cpf.valor}>
                                    <tr>
                                        <td>{element.nomeSocial}</td>
                                        <td>{element.cpf.valor}</td>
                                        <td>{dataEmissaoCPF}</td>
                                        <td>
                                            {element.telefones ? (element.telefones.map((telefone: any) => (
                                                <div key={telefone.id}>
                                                    ({telefone.ddd}) {telefone.numero}
                                                </div>
                                            ))) : null}
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
                            <br />
                            {element.pets ? (
                                <div>
                                    <h6>Pets</h6>
                                    <table className='highlight centered'>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Tipo</th>
                                                <th>Raça</th>
                                                <th>Gênero</th>
                                            </tr>
                                        </thead>
                                        {element.pets.map((pet: any) => {
                                            return (
                                                <tbody key={pet.nome}>
                                                    <tr>
                                                        <td>{pet.nome}</td>
                                                        <td>{pet.tipo}</td>
                                                        <td>{pet.raca}</td>
                                                        <td>{pet.genero}</td>
                                                        <td>
                                                            <Link style={{ color: "#FFC100" }} to={`/formularioCadastroPet/${element.cpf.valor}/${pet.nome}`}>
                                                                mais detalhes
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>)
                                        })}
                                    </table>
                                </div>
                            ) : null}
                            <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                                <div className="col">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/formularioCadastroPet/${element.cpf.valor}`}>
                                            Cadastrar Pet
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/compras/${element.cpf.valor}`}>
                                            Visualizar Compras
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/formularioCadastroCliente/${element.cpf.valor}`}>
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