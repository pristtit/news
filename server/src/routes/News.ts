import express from "express";
import NewsController from "../controllers/news-controller"
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/create', NewsController.cretaeNews);
router.get('/getAll', NewsController.getAll);
router.get('/get/:id', NewsController.getById);
router.delete('/delete/:id', NewsController.deleteNews);
router.patch('/patch/:id', NewsController.updateNews);


export default router;