import express from 'express'
let router = express.Router();
import loginController from "../controllers/auth.js"
import isAuthenticated from '../middleware/auth.js';

router.post("/login", loginController);
router.post("/register", loginController);

export default router;

