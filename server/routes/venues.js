import express from 'express';

import { getVenues, createVenue } from '../controllers/venues.js';

const router = express.Router();

router.get('/', getVenues);
//router.post('/', createVenue);

export default router;
