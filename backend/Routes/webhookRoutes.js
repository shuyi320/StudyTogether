//webhookRoutes.js
//This file will define all the routes for webhooks

import express from 'express';

//Import functionality
import { handleWebHook } from '../Controllers/webhookController.js';

const router = express.Router();

router.post('/clerk', handleWebHook);

export default router;