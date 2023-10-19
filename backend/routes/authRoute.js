import express from 'express';
import { Google, SignIn, SignUp } from '../controllers/authController.js';

const router = express.Router()

router.post('/signup', SignUp)
router.post('/signin', SignIn)
router.post('/google', Google)

export default router;