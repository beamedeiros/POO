import { useEffect, useState } from "react";
import CSS from 'csstype'
import ClienteService from "../../services/clienteService"
import { useParams, Link } from "react-router-dom";
import { format } from 'date-fns'

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
    const { cpf } = useParams()
    const [clientes, setClientes] = useState({
        "nome": '',
        "nomeSocial": '',
        "valor": '',
        "data": '',
        "estado": '',
        "cidade": '',
        "bairro": '',
        "rua": '',
        "numero": '',
        "codigoPostal": '',
        "informacoesAdicionais": '',
        "telefone": [
            {
                "ddd": '',
                "numero": ''
            }
        ],
    })

    const saveClient = async () => {
        const data = {
            nome: clientes.nome,
            nomeSocial: clientes.nomeSocial,
            valor: clientes.valor,
            data: clientes.data,
            estado: clientes.estado,
            cidade: clientes.cidade,
            bairro: clientes.bairro,
            rua: clientes.rua,
            numero: clientes.numero,
            codigoPostal: clientes.codigoPostal,
            informacoesAdicionais: clientes.informacoesAdicionais,
            telefone: clientes.telefone
        }
        await ClienteService.create(data)
        console.log('Cliente criado com sucesso!');
    }

    useEffect(() => {
        if (cpf) {
            fetchClientDetails()
        }
    }, [])

    const fetchClientDetails = async () => {
        try {
            const response = await ClienteService.getById(cpf)
            const dataEmissaoCPF = format(new Date(response.data.cpf.dataEmissao), 'dd/MM/yyyy')
            setClientes({
                ...clientes,
                nome: response.data.nome,
                nomeSocial: response.data.nomeSocial,
                data: dataEmissaoCPF,
                estado: response.data.endereco.estado,
                cidade: response.data.endereco.cidade,
                bairro: response.data.endereco.bairro,
                rua: response.data.endereco.rua,
                numero: response.data.endereco.numero,
                codigoPostal: response.data.endereco.codigoPostal,
                informacoesAdicionais: response.data.endereco.informacoesAdicionais,
                telefone: response.data.telefones,
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const updateClient = async () => {
        const data = {
            valor: cpf,
            nome: clientes.nome,
            nomeSocial: clientes.nomeSocial,
            data: clientes.data,
            estado: clientes.estado,
            cidade: clientes.cidade,
            bairro: clientes.bairro,
            rua: clientes.rua,
            numero: clientes.numero,
            codigoPostal: clientes.codigoPostal,
            informacoesAdicionais: clientes.informacoesAdicionais,            
            telefone: clientes.telefone
        }
        await ClienteService.update(cpf, data)
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
                        <div className="row">
                            {!cpf ? (
                                <div className="col s6">
                                    <label>CPF</label>
                                    <input id="cpf" type="text" className="validate" value={clientes.valor} onChange={e => { setClientes({ ...clientes, valor: e.target.value }) }} />
                                </div>) : (
                                <div className="col s6">
                                    <label>CPF</label>
                                    <p>{cpf}</p>
                                </div>
                            )}
                            <div className="col s6">
                                <label>Data de emissão</label>
                                <input id="data" type="text" className="validate" value={clientes.data} onChange={e => { setClientes({ ...clientes, data: e.target.value }) }} />
                            </div>
                        </div>
                        {(clientes.telefone) ?
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
                                {/* <div className="col s4">
                                    <label>Estado</label>
                                    <input id="estado" type="text" className="validate" value={clientes.endereco.estado} onChange={e => { let estado = { ...clientes.endereco, estado: e.target.value }; setClientes({ ...clientes, endereco: estado }) }} />
                                </div> */}
                                <div className="col s4">
                                    <label>Estado</label>
                                    <input id="estado" type="text" className="validate" value={clientes.estado} onChange={e => { setClientes({ ...clientes, estado: e.target.value }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Cidade</label>
                                    <input id="cidade" type="text" className="validate" value={clientes.cidade} onChange={e => { setClientes({ ...clientes, cidade: e.target.value }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Bairro</label>
                                    <input id="bairro" type="text" className="validate" value={clientes.bairro} onChange={e => { setClientes({ ...clientes, bairro: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <label>Rua</label>
                                    <input id="rua" type="text" className="validate" value={clientes.rua} onChange={e => { setClientes({ ...clientes, rua: e.target.value }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Número</label>
                                    <input id="num" type="text" className="validate" value={clientes.numero} onChange={e => { setClientes({ ...clientes, numero: e.target.value }) }} />
                                </div>
                                <div className="col s4">
                                    <label>Código Postal</label>
                                    <input id="cep" type="text" className="validate" value={clientes.codigoPostal} onChange={e => { setClientes({ ...clientes, codigoPostal: e.target.value }) }} />
                                </div>
                                <div className="col s12">
                                    <label>Informações adicionais</label>
                                    <input id="info" type="text" className="validate" value={clientes.informacoesAdicionais} onChange={e => { setClientes({ ...clientes, informacoesAdicionais: e.target.value }) }} />
                                </div>
                            </div>
                        </div>
                        {!cpf ? (
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