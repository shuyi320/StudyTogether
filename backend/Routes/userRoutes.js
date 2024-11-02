//This file describes all the routes for creating/modifying users
import express from 'express';
import { registerUser, getExistingUsers, addFriend, getFriends } from '../Controllers/userController.js'; 

const router = express.Router();

router.post('/register', registerUser);
router.get('/', getExistingUsers);

router.post('/:userId/relationships', addFriend);
router.get('/:userId/relationships', getFriends);

export default router; 