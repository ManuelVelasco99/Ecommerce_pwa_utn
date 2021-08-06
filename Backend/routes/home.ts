import { Router } from "express";
import homeController from '../controllers/home';

const homeRoutes = Router();

homeRoutes.get('/categories', homeController.getCategories);

homeRoutes.get('/products', homeController.getProducts);

export default homeRoutes;