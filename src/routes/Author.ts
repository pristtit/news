import express from "express";
import controller from "../controllers/Author"
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.author.create),controller.cretaeAuthor);
router.get('/get/:authorId', controller.readAuthor);
router.get('/get/', controller.readAll);
router.patch('/update/:authorId', ValidateSchema(Schemas.author.update), controller.updateAuthor);
router.delete('/delete/:authorId', controller.deleteAuthor);

export = router;