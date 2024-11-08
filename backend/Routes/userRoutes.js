//This file describes all the routes for creating/modifying users
import express from 'express';

//Import functionality
import { getExistingUsers, addFriend, getFriends } from '../Controllers/userController.js';

const router = express.Router();

// POST routes
router.post('/relationships', addFriend);

// GET routes
router.get('/', getExistingUsers);
router.get('/relationships', getFriends);
router.get('/relationships/:id',); // This route could potentially return chat data between users

export default router; 