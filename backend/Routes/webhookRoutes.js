//webhookRoutes.js
//This file will define all the routes for webhooks

import express from 'express';
import bodyParser from 'body-parser';

//Import functionality
import { handleWebHook } from '../Controllers/webhookController.js';

const router = express.Router();
router.use(bodyParser.raw({ type: 'application/json' }));

router.post('/', handleWebHook);

export default router;