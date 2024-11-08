import express from 'express';

import { createChatRoom, getChatRoomBYId } from '../Controllers/chatRoomController';

const router = express.Router();

//POST
router.post('/chatRoom', createChatRoom);

//GET
router.get('/chatRoom/:id', getChatRoomBYId);

export default router;