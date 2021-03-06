import { Router } from "express";
import verifyToken from "../middlewares/authentication";
import verifyAdmin from "../middlewares/admin";
import adminCategoriasController from '../controllers/adminCategorias'
import adminProductosController from '../controllers/adminProductos'
const adminRoutes = Router();

adminRoutes.get('/categories',verifyToken,verifyAdmin,adminCategoriasController.showCategories);
adminRoutes.get('/category',verifyToken,verifyAdmin,adminCategoriasController.getCategory);
adminRoutes.post('/category',verifyToken,verifyAdmin,adminCategoriasController.updateCategory);

adminRoutes.post('/categories/create',verifyToken,verifyAdmin,adminCategoriasController.createCategory);

adminRoutes.post('/categories/delete',verifyToken,verifyAdmin,adminCategoriasController.deleteCategory);

adminRoutes.post('/categories/hide',verifyToken,verifyAdmin,adminCategoriasController.hideCategory);

adminRoutes.get('/products',verifyToken,verifyAdmin,adminProductosController.showProducts);

adminRoutes.get('/proudcts/image',adminProductosController.getProductImage);

adminRoutes.post('/products/create',verifyToken,verifyAdmin,adminProductosController.createProducts);

adminRoutes.post('/products/delete',verifyToken,verifyAdmin,adminProductosController.deleteProduct);

adminRoutes.post('/products/update',verifyToken,verifyAdmin,adminProductosController.updateProduct);

export default adminRoutes;