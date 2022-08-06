import express from "express";
import authController from "../controllers/user-controller"
import { Schemas, ValidateSchema } from "../middleware/ValidateSchama";

const router = express.Router();

router.post('/registration', ValidateSchema(Schemas.user),authController.registration);
router.post('/login',ValidateSchema(Schemas.user),  authController.login);
router.post('/logout', authController.logout);
router.get('/refresh', );


export default router;