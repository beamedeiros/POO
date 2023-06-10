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
    const clientes = [
        {
            "id": 1,
            "nome": "Eduardo Sakaue",
            "nomeSocial": "Sakaue",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 4,
            "valor": 120.67
        },
        {
            "id": 2,
            "nome": "Juliana Martinez",
            "nomeSocial": "Juliana",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 7,
            "valor": 220
        },
        {
            "id": 3,
            "nome": "Emanuel Mineda",
            "nomeSocial": "Mineda",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 28,
            "valor": 900
        },
        {
            "id": 4,
            "nome": "Fernando Masanori",
            "nomeSocial": "Masanori",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 1,
            "valor": 80
        },
        {
            "id": 5,
            "nome": "Gildárcio Souza",
            "nomeSocial": "Gildárcio",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 10,
            "valor": 40
        },
        {
            "id": 6,
            "nome": "Pedro Motta",
            "nomeSocial": "Pedro",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 12,
            "valor": 700
        },
        {
            "id": 7,
            "nome": "Beatriz Medeiros",
            "nomeSocial": "Beatriz",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 4,
            "valor": 600
        },
        {
            "id": 8,
            "nome": "Diogo Branquinho",
            "nomeSocial": "Branquinho",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 0,
            "valor": 0
        },
        {
            "id": 9,
            "nome": "Lucas Nadalete",
            "nomeSocial": "Nadal",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 20,
            "valor": 100
        },
        {
            "id": 10,
            "nome": "Kauã Borgarelli",
            "nomeSocial": "Kauã",
            "cpf": "000.000.000-00",
            "dataEmissao": "00/00/0000",
            "telefone": "(00) 0000-0000",
            "qtd": 9,
            "valor": 700
        },
    ]

    const listaQtd = clientes.slice().sort((a, b) => b.qtd - a.qtd);
    const listaValor = clientes.slice(0, 5).sort((a, b) => b.valor - a.valor);

    const produtos = [
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
    ]

    const servicos = [
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
    ]

    const prodServ = [...produtos, ...servicos]

    const listaPSQtd = prodServ.slice().sort((a, b) => b.qtd - a.qtd)

    const pets = [
        {
            "id": 1,
            "nome": "Lili",
            "tipo": "cachorro",
            "raca": "Pug",
            "genero": "F",
            "produto": [
                {
                    "id": 1,
                    "nome": "BelaVitae",
                    "descricao": "Shampoo",
                    "valor": 12.00,
                    "qtd": 3
                }
            ],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 3
                },
            ]
        },
        {
            "id": 2,
            "nome": "Luci",
            "tipo": "gato",
            "raca": "Siamês",
            "genero": "M",
            "produto": [
                {
                    "id": 1,
                    "nome": "BelaVitae",
                    "descricao": "Shampoo",
                    "valor": 12.00,
                    "qtd": 1
                }
            ],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 7
                },
            ]
        },
        {
            "id": 3,
            "nome": "Belinha",
            "tipo": "cachorro",
            "raca": "Golden Retriever",
            "genero": "F",
            "produto": [
                {
                    "id": 1,
                    "nome": "BelaVitae",
                    "descricao": "Shampoo",
                    "valor": 12.00,
                    "qtd": 6
                }
            ],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 15
                },
            ]
        },
        {
            "id": 4,
            "nome": "Salem",
            "tipo": "gato",
            "raca": "Siamês",
            "genero": "M",
            "produto": [
                {
                    "id": 1,
                    "nome": "BelaVitae",
                    "descricao": "Shampoo",
                    "valor": 12.00,
                    "qtd": 4
                }
            ],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 4
                },
            ]
        },
        {
            "id": 5,
            "nome": "Pipoca",
            "tipo": "porquinho da índia",
            "raca": "Abissínio",
            "genero": "F",
            "produto": [
                {
                    "id": 1,
                    "nome": "BelaVitae",
                    "descricao": "Shampoo",
                    "valor": 12.00,
                    "qtd": 8
                }
            ],
            "servico": [
                {
                    "id": 4,
                    "nome": "Banho",
                    "descricao": "Banho em pets",
                    "valor": 90.00,
                    "qtd": 9
                },
            ]
        },
    ]

    interface GroupedPet {
        tipo: string;
        raca: string;
        produtos: Record<string, number>;
        servicos: Record<string, number>;
    }

    const groupedPets: Record<string, GroupedPet> = {};

    pets.forEach((pet) => {
        const key = `${pet.tipo}-${pet.raca}`;

        if (!groupedPets[key]) {
            groupedPets[key] = {
                tipo: pet.tipo,
                raca: pet.raca,
                produtos: {},
                servicos: {},
            };
        }

        const group = groupedPets[key];

        pet.produto.forEach((produto) => {
            const produtoKey = `${produto.nome}`;
            if (!group.produtos[produtoKey]) {
                group.produtos[produtoKey] = 0;
            }
            group.produtos[produtoKey] += produto.qtd;
        });

        pet.servico.forEach((servico) => {
            const servicoKey = `${servico.nome}`;
            if (!group.servicos[servicoKey]) {
                group.servicos[servicoKey] = 0;
            }
            group.servicos[servicoKey] += servico.qtd;
        });
    });

    const sortedGroupedPets = Object.values(groupedPets).sort((a, b) => {
        const totalA = Object.values(a.produtos).reduce((sum, value) => sum + value, 0) +
            Object.values(a.servicos).reduce((sum, value) => sum + value, 0);
        const totalB = Object.values(b.produtos).reduce((sum, value) => sum + value, 0) +
            Object.values(b.servicos).reduce((sum, value) => sum + value, 0);
        return totalB - totalA;
    });

    sortedGroupedPets.forEach((group) => {
        const tipo = group.tipo;
        const raca = group.raca;

        Object.entries(group.produtos).forEach(([produto, qtd]) => {
            console.log(`${tipo} ${raca} ${produto} qtd = ${qtd}`);
        });

        Object.entries(group.servicos).forEach(([servico, qtd]) => {
            console.log(`${tipo} ${raca} ${servico} qtd = ${qtd}`);
        });
    });

    const sortedQuantities = Object.values(groupedPets)
        .flatMap((group) => [
            ...Object.values(group.produtos),
            ...Object.values(group.servicos),
        ])
        .map((quantity) => Number(quantity))
        .sort((a, b) => b - a);



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
                                            <th>Telefone</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    {listaQtd.map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>{element.nomeSocial}</td>
                                                    <td>{element.cpf}</td>
                                                    <td>{element.telefone}</td>
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
                                            <th>Telefone</th>
                                            <th>Valor Total</th>
                                        </tr>
                                    </thead>
                                    {listaValor.map((element) => {
                                        return (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>{element.nomeSocial}</td>
                                                    <td>{element.cpf}</td>
                                                    <td>{element.telefone}</td>
                                                    <td>{element.valor}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
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
                                            <th>Raça</th>
                                            <th>Nome do Produto/ Serviço</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedGroupedPets.map((group) => (
                                            <>
                                                {Object.entries(group.servicos)
                                                    .sort(([a], [b]) => sortedQuantities.indexOf(Number(b)) - sortedQuantities.indexOf(Number(a)))
                                                    .map(([servico, qtd]) => (
                                                        <tr key={`${group.tipo}-${group.raca}-${servico}`}>
                                                            <td>{group.tipo}</td>
                                                            <td>{group.raca}</td>
                                                            <td>{servico}</td>
                                                            <td>{qtd}</td>
                                                        </tr>
                                                    ))}
                                                {Object.entries(group.produtos)
                                                    .sort(([a], [b]) => sortedQuantities.indexOf(Number(b)) - sortedQuantities.indexOf(Number(a)))
                                                    .map(([produto, qtd]) => (
                                                        <tr key={`${group.tipo}-${group.raca}-${produto}`}>
                                                            <td>{group.tipo}</td>
                                                            <td>{group.raca}</td>
                                                            <td>{produto}</td>
                                                            <td>{qtd}</td>
                                                        </tr>
                                                    ))}
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}