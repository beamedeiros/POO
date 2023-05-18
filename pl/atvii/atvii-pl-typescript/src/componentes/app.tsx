import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import FormularioCadastroCliente from './cadastro/formularioCadastroCliente';
import FormularioCadastroProduto from './cadastro/formularioCadastroProduto';
import FormularioCadastroServico from './cadastro/formularioCadastroServico';
import FormularioCadastroPet from './cadastro/formularioCadastroPet';
import ListaCliente from './listagem/listaClientes';
import Clientes from './service/clientes';
import ListaProduto from './listagem/listaProdutos';
import Produtos from './service/produtos';
import ListaPet from './listagem/listaPets';
import Pets from './service/pets';
import ListaServico from './listagem/listaServicos';
import Servicos from './service/servicos';
import Listagens from './listagem/listagens';

function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/Listagens" element={<Listagens/>}/>
      <Route path="/listaCliente" element={<ListaCliente/>}/>
      <Route path="/listaProduto" element={<ListaProduto/>}/>
      <Route path="/listaPets" element={<ListaPet/>}/>
      <Route path="/listaServicos" element={<ListaServico/>}/>
      <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
      <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto/>}/>
      <Route path="/formularioCadastroServico" element={<FormularioCadastroServico/>}/>
      <Route path="/formularioCadastroPet" element={<FormularioCadastroPet/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/pets" element={<Pets/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/servicos" element={<Servicos/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
  export default App;