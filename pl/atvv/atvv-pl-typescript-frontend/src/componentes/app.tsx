import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import FormularioCadastroCliente from './cadastro/formularioCadastroCliente';
import FormularioCadastroProduto from './cadastro/formularioCadastroProduto';
import FormularioCadastroServico from './cadastro/formularioCadastroServico';
import FormularioCadastroPet from './cadastro/formularioCadastroPet';
import ListaCliente from './listagem/listaClientes';
import Clientes from './details/clientes';
import ListaPet from './listagem/listaPets';
import ListaServicos from './listagem/listaServicos';
import Listagens from './listagem/listagens';
import FormularioCadastroCompra from './cadastro/formularioCadastroCompra';
import CompraServ from './details/compraServ';
import CompraProd from './details/compraProd';
import ListaProdutos from './listagem/listaProdutos';
import ListaCompras from './listagem/listaCompras';

function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/Listagens" element={<Listagens/>}/>
      <Route path="/clientes" element={<ListaCliente/>}/>
      <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
      <Route path="/formularioCadastroCliente/:cpf" element={<FormularioCadastroCliente/>}/>
      <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto/>}/>
      <Route path="/formularioCadastroProduto/:nome" element={<FormularioCadastroProduto/>}/>
      <Route path="/formularioCadastroServico" element={<FormularioCadastroServico/>}/>
      <Route path="/formularioCadastroServico/:nome" element={<FormularioCadastroServico/>}/>
      <Route path="/formularioCadastroPet/:cpf" element={<FormularioCadastroPet/>}/>
      <Route path="/formularioCadastroPet/:cpf/:nome" element={<FormularioCadastroPet/>}/>
      <Route path="/formularioCadastroCompra" element={<FormularioCadastroCompra/>}/>
      <Route path="/clientes/:cpf" element={<Clientes/>}/>
      <Route path="/produtos" element={<ListaProdutos/>}/>
      <Route path="/pets" element={<ListaPet/>}/>
      <Route path="/compra/servico/:cpf/:servico/:pet" element={<CompraServ/>}/>
      <Route path="/compra/produto/:cpf/:produto/:pet" element={<CompraProd/>}/>
      <Route path="/servicos" element={<ListaServicos/>}/>
      <Route path="/compras/:cpf" element={<ListaCompras/>}/>
      {/* <Route path="/produtos/:id" element={<Produtos/>}/>
      <Route path="/pets/:id" element={<Pets/>}/>
      <Route path="/clientes/:id" element={<Clientes/>}/>
      <Route path="/servicos/:id" element={<Servicos/>}/> */}
      </Routes>
      </BrowserRouter>
    );
  }
  export default App;