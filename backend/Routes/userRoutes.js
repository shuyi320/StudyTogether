//This file describes all the routes for creating/modifying users
import express from 'express';

//Import functionality
import { getExistingUsers, addFriend, getFriends } from '../Controllers/userController.js';

const router = express.Router();

//router.post('/register', registerUser);
router.get('/', getExistingUsers);

router.post('/relationships', addFriend);
router.get('/relationships', getFriends);
router.get('/relationships/:id',);

export default router; 