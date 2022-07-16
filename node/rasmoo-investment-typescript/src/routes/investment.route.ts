import { Router } from "express";
import investmentController from '../controllers/investment.controller';

const investmentRoutes = Router();

investmentRoutes.post('/investments', investmentController.save);
investmentRoutes.get('/investments', investmentController.findAll);
investmentRoutes.get('/investments/:id', investmentController.findById);
investmentRoutes.put('/investments/:id', investmentController.updateById);
investmentRoutes.delete('/investments/:id', investmentController.deleteById);

export default investmentRoutes;
