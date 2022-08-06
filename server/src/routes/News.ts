import express from "express";
import NewsController from "../controllers/news-controller"
import validateToken from "../middleware/validate-token";
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/create', validateToken, ValidateSchema(Schemas.news), NewsController.cretaeNews);
router.get('/getAll', NewsController.getAll);
router.get('/get/:id', NewsController.getById);
router.delete('/delete/:id', validateToken, NewsController.deleteNews);
router.patch('/patch/:id', validateToken, ValidateSchema(Schemas.news), NewsController.updateNews);


export default router;