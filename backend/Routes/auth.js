import express from 'express';
import { register, login } from '../Controllers/authControl.js';

const router = express.Router();

router.post('/Registrarse', register);
router.post('/login', login);

export default router;
