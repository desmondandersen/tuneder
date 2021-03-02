import express from 'express';
import Musicians from '../models/musicianModel.js';

const router = express.Router();

// Get musician information
export const getMusicians = async (req, res) => {
  try {
    const artists = await Musicians.find();

    res.status(200).json(musicians);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create new musician
export const createMusician = async (req, res) => {
  const musician = req.body;
  const newMusician = new Musicians(musician);

  try {
    await newMusician.save();
    res.status(201).json(newMusician);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// For more on HTTP Status Codes see https://restapitutorial.com/httpstatuscodes.html

export default router;
