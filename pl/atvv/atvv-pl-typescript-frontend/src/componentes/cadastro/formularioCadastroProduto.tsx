import { useState, useEffect } from "react";
import CSS from 'csstype'
import ProdutoService from "../../services/produtoService"
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

export default function FormularioCadastroProduto() {
    const [produtos, setProdutos] = useState({
        "nome": '',
        "valor": 0
    })

    const { nome } = useParams()

    const saveProd = async () => {
        const data = {
            nome: produtos.nome,
            valor: produtos.valor,
        }
        await ProdutoService.create(data)
        console.log('Produto criado com sucesso!');
    }

    useEffect(() => {
        if (nome) {
            fetchProdDetails()
        }
    }, [])

    const fetchProdDetails = async () => {
        try {
            const response = await ProdutoService.getById(nome)
            setProdutos({
                ...produtos,
                nome: response.data.nome,
                valor: response.data.valor
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const updateProd = async () => {
        const data = {
            nome: produtos.nome,
            valor: produtos.valor
        }
        await ProdutoService.update(nome, data)
        console.log('Produto atualizado com sucesso!');
    }

    const deleteProd = async () => {
        await ProdutoService.remove(nome)
        console.log('Produto excluído com sucesso!');
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
                                <input id="nome_produto" type="text" className="validate" value={produtos.nome} onChange={e => { setProdutos({ ...produtos, nome: e.target.value }) }} />
                            </div>
                            <div className="col s6">
                                <label>Valor</label>
                                <input id="valor" type="number" className="validate" value={produtos.valor} onChange={e => { setProdutos({ ...produtos, valor: e.target.valueAsNumber }) }} />
                            </div>
                        </div>
                        {!nome ? (
                            <div className="row">
                                <div className="col s12">
                                    <button onClick={saveProd} className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Produto
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                                <div className="col">
                                    <button onClick={updateProd} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/produtos`}>
                                            Editar Produto
                                        </Link>
                                    </button>
                                </div>
                                <div className="col">
                                    <button onClick={deleteProd} className="btn waves-effect waves-light" style={backgroundColor} type="button" name="action">
                                        <Link style={{ color: "#ffffff" }} to={`/produtos`}>
                                            Excluir Produto
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