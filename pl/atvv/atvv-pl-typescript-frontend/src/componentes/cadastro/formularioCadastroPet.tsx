import { useState, useEffect } from "react";
import CSS from 'csstype'
import PetService from "../../services/petService"
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

export default function FormularioCadastroPet() {
    const { cpf, nome } = useParams()
    const [pets, setPets] = useState({
        "nome": '',
        "tipo": '',
        "raca": '',
        "genero": ''
    })

    const savePet = async () => {
        const data = {
            nome: pets.nome,
            tipo: pets.tipo,
            raca: pets.raca,
            genero: pets.genero
        }
        await PetService.create(cpf, data)
        console.log('Pet criado com sucesso!');
    }

    useEffect(() => {
        if (cpf) {
            fetchPetDetails()
        }
    }, [])

    const fetchPetDetails = async () => {
        try {
            const response = await PetService.getById(cpf, nome)
            setPets({
                ...pets,
                nome: response.data.nome,
                raca: response.data.raca,
                tipo: response.data.tipo,
                genero: response.data.genero
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const updatePet = async () => {
        const data = {
            nome: nome,
            tipo: pets.tipo,
            raca: pets.raca,
            genero: pets.genero
        }
        console.log(data)
        await PetService.update(cpf, nome, data)
        console.log('Pet atualizado com sucesso!');
    }

    const deletePet = async () => {
        await PetService.remove(cpf, nome)
        console.log('Pet excluído com sucesso!');
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
                                <label>Nome</label>
                                <input id="nome_pet" type="text" className="validate" value={pets.nome} onChange={e => { setPets({ ...pets, nome: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Tipo</label>
                                <input id="tipo" type="text" className="validate" value={pets.tipo} onChange={e => { setPets({ ...pets, tipo: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Raça</label>
                                <input id="raca" type="text" className="validate" value={pets.raca} onChange={e => { setPets({ ...pets, raca: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Gênero</label>
                                <input id="genero" type="text" className="validate" value={pets.genero} onChange={e => { setPets({ ...pets, genero: e.target.value }) }} />
                            </div>
                        </div>
                        {!nome ? (
                            <div className="row">
                                <div className="col s12">
                                    <button onClick={savePet} className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Pet
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                                <div className="col">
                                    <button onClick={updatePet} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/clientes/${cpf}`}>
                                            Editar Pet
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button onClick={deletePet} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/clientes/${cpf}`}>
                                            Excluir Pet
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}