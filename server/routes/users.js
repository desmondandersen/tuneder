import express from 'express';

import { getUsers, createUser, getUsersLogin } from '../controllers/users.js';

const router = express.Router();

router.get('/login', getUsers);

router.get('/', getUsers);
router.post('/', createUser);



export default router;
