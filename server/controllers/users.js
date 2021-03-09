import express from 'express';
import mongoose from 'mongoose';

import Users from '../models/userModel.js';

const router = express.Router();

// Get user information
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new Users(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Edit an existing user
export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id.');

  const updatedUser = await Users.findByIdAndUpdate(_id, user, { new: true });
  res.json(updatedUser);
};

// For more on HTTP Status Codes see https://restapitutorial.com/httpstatuscodes.html

export default router;
