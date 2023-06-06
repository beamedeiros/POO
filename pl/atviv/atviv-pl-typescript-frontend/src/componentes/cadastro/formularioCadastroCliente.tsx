import { useEffect, useState } from "react";
import CSS from 'csstype'
import ClienteService from "../../services/clienteService"
import { useParams, Link } from "react-router-dom";


const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default function FormularioCadastroCliente() {
    const { id } = useParams()
    const [clientes, setClientes] = useState({
        "nome": '',
        "nomeSocial": '',
        "email": '',
        "telefone": [
            {
                "ddd": '',
                "numero": ''
            }
        ],
        "endereco": {
            "estado": '',
            "cidade": '',
            "bairro": '',
            "rua": '',
            "numero": '',
            "codigoPostal": '',
            "informacoesAdicionais": ''
        }
    })

    const saveClient = async () => {
        const data = {
            nome: clientes.nome,
            nomeSocial: clientes.nomeSocial,
            email: clientes.email,
            endereco: {
                estado: clientes.endereco.estado,
                cidade: clientes.endereco.cidade,
                bairro: clientes.endereco.bairro,
                rua: clientes.endereco.rua,
                numero: clientes.endereco.numero,
                codigoPostal: clientes.endereco.codigoPostal,
                informacoesAdicionais: clientes.endereco.informacoesAdicionais
            },
            telefones: clientes.telefone
        }
        await ClienteService.create(data)
        console.log('Cliente criado com sucesso!');
    }

    useEffect(() => {
        if (id) {
            fetchClientDetails()
        }
    }, [])

    const fetchClientDetails = async () => {
        try {
            const response = await ClienteService.getById(id)
            setClientes({
                ...clientes,
                nome: response.data.nome,
                nomeSocial: response.data.nomeSocial,
                email: response.data.email,
                telefone: response.data.telefones,
                endereco: response.data.endereco
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const updateClient = async () => {
        const data = {
            id: id,
            nome: clientes.nome,
            nomeSocial: clientes.nomeSocial,
            email: clientes.email,
            endereco: clientes.endereco,
            telefones: clientes.telefone
        }
        console.log(data)
        await ClienteService.update(data)
        console.log('Cliente atualizado com sucesso!');
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
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6">
                                <label>Nome:</label>
                                <input id="nome_cliente" type="text" className="validate" value={clientes.nome} onChange={e => { setClientes({ ...clientes, nome: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Nome social:</label>
                                <input id="nome_social" type="text" className="validate" value={clientes.nomeSocial} onChange={e => { setClientes({ ...clientes, nomeSocial: e.target.value }) }} />
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col s6">
                                <label>CPF</label>
                                <input id="cpf" type="text" className="validate" value={cpf} onChange={e => { setCpf(e.target.value) }} />
                            </div>
                            <div className="col s6">
                                <label>Data de emissão</label>
                                <input id="data" type="text" className="validate" value={dataEmissao} onChange={e => { setDataEmissao(e.target.value) }} />
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col s6">
                                <label>Email</label>
                                <input id="email" type="text" className="validate" value={clientes.email} onChange={e => { setClientes({ ...clientes, email: e.target.value }) }} />
                            </div>
                        </div>

                        {(clientes.telefone.length > 0) ?
                            clientes.telefone.map((tel, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col s2">
                                            <label>DDD</label>
                                            <input id="telefone" type="text" className="validate" value={tel.ddd} onChange={(e) => {
                                                let arr = clientes.telefone
                                                arr[index].ddd = e.target.value
                                                setClientes({ ...clientes, telefone: arr })
                                            }
                                            } />
                                        </div>
                                        <div className="col s4">
                                            <label>Número</label>
                                            <input id="telefone" type="text" className="validate" value={tel.numero} onChange={(e) => {
                                                let arr = clientes.telefone
                                                arr[index].numero = e.target.value
                                                setClientes({ ...clientes, telefone: arr })
                                            }
                                            } />
                                        </div>
                                    </div>
                                )
                            })
                            :
                            null
                        }
                        <button type="button" className="btn waves-effect waves-light" style={backgroundColor} onClick={() => {
                            let arr = clientes.telefone
                            arr.push({ ddd: "", numero: "" })
                            setClientes({ ...clientes, telefone: arr })
                        }
                        }>add</button>

                        <div>
                            <h6>Endereço:</h6>
                            <br />
                            <div className="row">
                                <div className="col s4">
                                    <label>Estado</label>
                                    <input id="estado" type="text" className="validate" value={clientes.endereco.estado} onChange={e => { let estado = { ...clientes.endereco, estado: e.target.value }; setClientes({ ...clientes, endereco: estado }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Cidade</label>
                                    <input id="cidade" type="text" className="validate" value={clientes.endereco.cidade} onChange={e => { let cidade = { ...clientes.endereco, cidade: e.target.value }; setClientes({ ...clientes, endereco: cidade }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Bairro</label>
                                    <input id="bairro" type="text" className="validate" value={clientes.endereco.bairro} onChange={e => { let bairro = { ...clientes.endereco, bairro: e.target.value }; setClientes({ ...clientes, endereco: bairro }) }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <label>Rua</label>
                                    <input id="rua" type="text" className="validate" value={clientes.endereco.rua} onChange={e => { let rua = { ...clientes.endereco, rua: e.target.value }; setClientes({ ...clientes, endereco: rua }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Número</label>
                                    <input id="num" type="text" className="validate" value={clientes.endereco.numero} onChange={e => { let numero = { ...clientes.endereco, numero: e.target.value }; setClientes({ ...clientes, endereco: numero }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Código Postal</label>
                                    <input id="cep" type="text" className="validate" value={clientes.endereco.codigoPostal} onChange={e => { let codigoPostal = { ...clientes.endereco, codigoPostal: e.target.value }; setClientes({ ...clientes, endereco: codigoPostal }) }} />
                                </div>
                                <div className="col s12">
                                    <label>Informações adicionais</label>
                                    <input id="info" type="text" className="validate" value={clientes.endereco.informacoesAdicionais} onChange={e => { let informacoesAdicionais = { ...clientes.endereco, informacoesAdicionais: e.target.value }; setClientes({ ...clientes, endereco: informacoesAdicionais }) }} />
                                </div>
                            </div>
                        </div>
                        {!id ? (
                            <div className="row">
                                <div className="col s12">
                                    <button onClick={saveClient} className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Cliente
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col s12">

                                    <button onClick={updateClient} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/clientes`}>
                                            Editar Cliente
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        )
                        }
                    </form>
                </div>
            </div>
        </div >
    )
}