import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
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
const tabStyle: CSS.Properties = {
    color: 'white',
    backgroundColor: '#73A2B9',
    borderLeft: '6px solid white',
    height: '500px'
}

export default function Listagens() {
    const [clientes, setClientes] = useState([
        {
            "id": 1,
            "nome": "Eduardo Sakaue",
            "nomeSocial": "Sakaue",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": [{
                "id": 1,
                "nome": "BelaVitae",
                "descricao": "Shampoo",
                "valor": 12.00,
                "qtd": 3
            }, {
                "id": 3,
                "nome": "Macarena",
                "descricao": "Roupa para cachorro",
                "valor": 50.90,
                "qtd": 2
            }],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 6
                },
            ],
        },
        {
            "id": 2,
            "nome": "Juliana Martinez",
            "nomeSocial": "Juliana",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Shampoo",
            "servico": "",
            "qtd": 20,
            "valor": 123
        },
        {
            "id": 3,
            "nome": "Emanuel Mineda",
            "nomeSocial": "Mineda",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Condicionador",
            "servico": "Tosa",
            "qtd": 60,
            "valor": 345
        },
        {
            "id": 4,
            "nome": "Fernando Masanori",
            "nomeSocial": "Masanori",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Coleira",
            "servico": "Banho",
            "qtd": 40,
            "valor": 140
        },
        {
            "id": 5,
            "nome": "Gildárcio Souza",
            "nomeSocial": "Gildárcio",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Laço",
            "servico": "",
            "qtd": 10,
            "valor": 100
        },
        {
            "id": 6,
            "nome": "Pedro Motta",
            "nomeSocial": "Pedro",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Roupa",
            "servico": "Banho",
            "qtd": 4,
            "valor": 160
        },
        {
            "id": 7,
            "nome": "Beatriz Medeiros",
            "nomeSocial": "Beatriz",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Shampoo",
            "servico": "",
            "qtd": 13,
            "valor": 230
        },
        {
            "id": 8,
            "nome": "Diogo Branquinho",
            "nomeSocial": "Branquinho",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Condicionador",
            "servico": "Tosa",
            "qtd": 18,
            "valor": 280
        },
        {
            "id": 9,
            "nome": "Lucas Nadalete",
            "nomeSocial": "Nadal",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Coleira",
            "servico": "Banho",
            "qtd": 77,
            "valor": 950
        },
        {
            "id": 10,
            "nome": "Kauã Borgarelli",
            "nomeSocial": "Kauã",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "produto": "Laço",
            "servico": "",
            "qtd": 89,
            "valor": 1500
        },
    ])

    const prod = clientes[0].produto;
    const serv = clientes[0].servico;

    console.log(prod);
    console.log(serv);

    // prod.forEach((produto) => {
    //     const total = produto.qtd * produto.valor;
    //     console.log(`Total value for ${produto.nome}: ${total}`);
    //   });
    // const listaQtd = clientes.sort((a, b) => (a.qtd > b.qtd) ? - 1 : 1)
    // const listaValor = clientes.sort((a, b) => (a.valor > b.valor) ? -1 : 1)

    const [produtos, setProdutos] = useState([
        {
            "id": 1,
            "nome": "BelaVitae",
            "descricao": "Shampoo",
            "valor": 12.00,
            "qtd": 20
        },
        {
            "id": 2,
            "nome": "BelaVitae",
            "descricao": "Condicionador",
            "valor": 14.00,
            "qtd": 40
        },
        {
            "id": 3,
            "nome": "Macarena",
            "descricao": "Roupa para cachorro",
            "valor": 50.90,
            "qtd": 2
        },
    ])

    const [servicos, setServicos] = useState([
        {
            "id": 4,
            "nome": "Banho",
            "descricao": "Banho em pets",
            "valor": 90.00,
            "qtd": 100
        },
        {
            "id": 5,
            "nome": "Tosa",
            "descricao": "Corte de unha e pêlo",
            "valor": 145.00,
            "qtd": 100
        }
    ])

    const prodServ = [...produtos, ...servicos]

    const listaPSQtd = prodServ.sort((a, b) => (a.qtd > b.qtd) ? -1 : 1)

    const [pets, setPets] = useState([
        {
            "id": 1,
            "nome": "Lili",
            "tipo": "cachorro",
            "raca": "Pug",
            "genero": "F"
        },
        {
            "id": 2,
            "nome": "Luci",
            "tipo": "gato",
            "raca": "Siamês",
            "genero": "M"
        },
        {
            "id": 3,
            "nome": "Belinha",
            "tipo": "cachorro",
            "raca": "Golden Retriever",
            "genero": "F"
        },
        {
            "id": 4,
            "nome": "Salem",
            "tipo": "gato",
            "raca": "Siamês",
            "genero": "M"
        },
        {
            "id": 5,
            "nome": "Pipoca",
            "tipo": "porquinho da índia",
            "raca": "Abissínio",
            "genero": "F"
        },
    ])

    const countTipo: any = {}

    pets.forEach(element => {
        countTipo[element.tipo] = (countTipo[element.tipo] || 0) + 1
    });

    const countRaca: any = {}

    pets.forEach(element => {
        countRaca[element.raca] = (countRaca[element.raca] || 0) + 1
    });

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
            <div className='container center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <br></br>
                <div className="row">
                    <div className="">
                        <ul className="tabs-swipe-demo tabs tabsConsumo gap">
                            <li className="tab col s2"><a href="#1" style={tabStyle}>Cliente Qtd</a></li>
                            <li className="tab col s2"><a href="#2" style={tabStyle}>Cliente Valor</a></li>
                            <li className="tab col s4"><a href="#3" style={tabStyle}>Produtos/Serviços Mais Consumidos</a></li>
                            <li className="tab col s4"><a href="#4" style={tabStyle}>Consumo Por Tipo/Raça De Pet</a></li>
                        </ul>
                    </div>
                    <br />
                    <div id="1" className="col s12">
                        <form>
                            <div>
                                <h5>Clientes com maior quantidade de consumo</h5>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Nome social</th>
                                            <th>CPF</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    {/* {listaQtd.map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>{element.nomeSocial}</td>
                                                    <td>{element.cpf}</td>
                                                    <td>{element.qtd}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })} */}
                                </table>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div id="2" className="col s12">
                        <form>
                            <div>
                                <h5>Clientes com maior valor de consumo</h5>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Nome social</th>
                                            <th>CPF</th>
                                            <th>Valor Total</th>
                                        </tr>
                                    </thead>
                                    {/* {listaValor.slice(0, 5).map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>{element.nomeSocial}</td>
                                                    <td>{element.cpf}</td>
                                                    <td>{element.valor}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })} */}
                                </table>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div id="3" className="col s12">
                        <form>
                            <div>
                                <h5>Produtos e Serviços Mais Consumidos</h5>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Valor</th>
                                            <th>Descrição</th>
                                            <th>Total consumido</th>
                                        </tr>
                                    </thead>
                                    {listaPSQtd.map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>R${element.valor}</td>
                                                    <td>{element.descricao}</td>
                                                    <td>{element.qtd}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div id="4" className="col s12">
                        <form>
                            <h5 className='racaConsumoFont'>Tipo</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Tipo</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    {pets.map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    {/* <td>{countTipo.}</td> */}

                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                            <br></br>
                            <h5 className='racaConsumoFont'>Raça</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Raça</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}