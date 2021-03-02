import express from 'express';

import { getMusicians, createMusician } from '../controllers/musicians.js';

const router = express.Router();

router.get('/', getMusicians);
router.post('/', createMusician);

export default router;