import express from "express";
import NewsController from "../controllers/news-controller"
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/create', NewsController.cretaeNews);
router.get('/getAll', NewsController.readNews);
router.get('/get/:id', NewsController.readNewsById);
router.delete('/delete', NewsController.deleteNews);
router.patch('/patch', NewsController.updateNews);


export default router;