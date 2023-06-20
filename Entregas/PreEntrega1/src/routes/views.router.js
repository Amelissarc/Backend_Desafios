import { Router } from 'express';
import __dirname from "../utils.js"
import ManagerProducts from '../daos/mongodb/ProductsManager.class.js';


let managerProducts = new ManagerProducts()

const router = Router();

router.get('/', async (req,res)=>{
  let products = await managerProducts.getProducts();
  res.render('home', {
    title: "Inicio",
    products: products
  });
})

router.get('/realtimeproducts', async (req,res)=>{
  res.render('realTimeProducts');
})

export default router;