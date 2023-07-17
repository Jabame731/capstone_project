import express from 'express';
import { loginUser, registerUser, updateUser } from '../controller/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

//update user
router.put('/updateUser/:id', updateUser);

export default router;
