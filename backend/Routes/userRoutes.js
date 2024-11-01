//This file describes all the routes for creating/modifying users
import express from 'express';
import { registerUser, getExistingUsers, addFriend, getFriends } from '../Controllers/userController.js'; 
const router = express.Router();

router.post('/register', registerUser);
router.post('/relationships', addFriend);
router.get('/:userId/relationships', getFriends);
router.get('/', getExistingUsers);

export default router; 