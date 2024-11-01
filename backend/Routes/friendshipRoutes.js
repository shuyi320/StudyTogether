//define the routes for friendship

/*
    FRIENDSHIP IS CURRENTLY BEING HANDLED THROUGH userRoutes!!!
*/
import express from 'express';
import { addFriend, getFriends } from '../Controllers/friendshipController.js';

const router = express.Router();

router.post('/', addFriend);
router.post('/:userId/friends', getFriends);

export default router;