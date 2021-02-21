import express from 'express';

import VenueMessage from '../models/venueMessage.js';

const router = express.Router();

// Get venue information
export const getVenues = async (req, res) => {
  try {
    const venueMessages = await VenueMessage.find();

    res.status(200).json(venueMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create new venue
export const createVenue = async (req, res) => {
  const venue = req.body;
  const newVenue = new VenueMessage(venue);

  try {
    await newVenue.save();
    res.status(201).json(newVenue);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// For more on HTTP Status Codes see https://restapitutorial.com/httpstatuscodes.html

export default router;
