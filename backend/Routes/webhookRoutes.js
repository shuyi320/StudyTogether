// webhookRoutes.js
// This file will define all the routes for webhooks

import express from 'express';
import { clerkMiddleware } from '@clerk/nextjs/server';

// Import functionality
import { handleWebHook } from '../Controllers/webhookController.js';

const router = express.Router();

// Apply Clerk middleware to the webhook route
router.post('/clerk', clerkMiddleware(), handleWebHook);

// Export the router
export default router;

// Configuration for Next.js API routes
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
