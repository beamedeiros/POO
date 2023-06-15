import { useState } from "react";
import CSS from 'csstype'
import { useParams, Link } from "react-router-dom";
import CompraService from "../../services/compraService";

const backgroundColor: CSS.Properties = {
    backgroundColor: '#73A2B9',
}
const fontStyle: CSS.Properties = {
    fontSize: 'x-large',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}

export default function CompraServ() {
    const { cpf, servico, pet } = useParams();
    const [compra, setCompra] = useState({
        qtd: 0
    });

    const saveBuy = async () => {
        const data = {
            qtd: compra.qtd
        };
        console.log(data)
        await CompraService.compraServ(cpf, servico, pet, data);
        console.log('Compra feita com sucesso!');
    };

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
                                <label>Quantidade de Serviço</label>
                                <input id="qtd" type="number" className="validate" value={compra.qtd} onChange={e => { setCompra({ ...compra, qtd: e.target.valueAsNumber }) }} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <button
                                    onClick={saveBuy}
                                    className="btn waves-effect waves-light"
                                    style={backgroundColor}
                                    type="button"
                                    name="action"
                                >
                                    <Link style={{ color: "#ffffff" }} to={`/Home`}>
                                        Cadastrar Compra
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}