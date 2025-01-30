import { Router } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/api', indexController.getInfo.bind(indexController));
}