//backend/Routes/eventRoutes.js
//This file should define the router and routes necessary to implement eventController.js

import express from 'express';

import { createEvent } from '../Controllers/eventController';

const router = express.Router();

//POST
router.post('/events/', createEvent);

//GET
router.get('/events/',);

export default router;