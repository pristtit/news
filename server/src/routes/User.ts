import express from "express";
import controller from "../controllers/user-controller"
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/registration', );
router.post('/login', );
router.post('/logout', );
router.get('/refresh', );


export default router;