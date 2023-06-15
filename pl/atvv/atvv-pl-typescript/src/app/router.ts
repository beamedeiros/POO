import { Router } from 'express';
import { listarCliente, createCliente, updateCliente, deleteCliente, getClientId } from '../view/clienteView';
import { listarPet, createPet, updatePet, deletePet, getPetId } from '../view/petView'
import { createProduto, deleteProduto, getProdId, listarProduto, updateProduto } from '../view/produtoView';
import { createService, deleteService, listarService, updateService, getServId } from '../view/servicoView';
import { createCompraProduto, createCompraServico } from '../view/compraView';
import { topTenClient, topServices, topPet, topFiveClient } from '../view/reportView'
const router = Router()

router.get('/', (req, res) => {
    return res.json('Hello world!')
})

router.get('/cliente', listarCliente)
router.get('/cliente/:cpf', getClientId)
router.post('/cliente', createCliente)
router.put('/cliente/:cpf', updateCliente)
router.delete('/cliente/:cpf', deleteCliente)

router.get('/pet',listarPet)
router.get('/pet/:cpf/:nome', getPetId)
router.post('/pet/:cpf',createPet)
router.put('/pet/:cpf/:nome',updatePet)
router.delete('/pet/:cpf/:nome',deletePet)

router.get('/produto', listarProduto)
router.get('/produto/:nome', getProdId)
router.post('/produto', createProduto)
router.put('/produto/:nome', updateProduto)
router.delete('/produto/:nome', deleteProduto)

router.get('/servico', listarService)
router.get('/servico/:nome', getServId)
router.post('/servico', createService)
router.put('/servico/:nome', updateService)
router.delete('/servico/:nome', deleteService)

router.put('/compra/servico/:cpf/:servico/:pet',createCompraServico)
router.put('/compra/produto/:cpf/:produto/:pet',createCompraProduto)

router.get('/report/topTenClient',topTenClient)
router.get('/report/topServices',topServices)
router.get('/report/topPet',topPet)
router.get('/report/topFiveClient',topFiveClient)

export default router