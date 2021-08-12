import { Router } from "express";
import homeController from '../controllers/home';

const homeRoutes = Router();

homeRoutes.get('/categories', homeController.getCategories);

homeRoutes.get('/products', homeController.getProducts);

homeRoutes.get('/product', homeController.getProduct);

export default homeRoutes;