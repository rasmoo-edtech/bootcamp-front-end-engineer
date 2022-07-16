import { Router } from "express";
import healthController from '../controllers/health.controller';

const healthRoutes = Router();

healthRoutes.get('/health', healthController.healthy);

export default healthRoutes;
