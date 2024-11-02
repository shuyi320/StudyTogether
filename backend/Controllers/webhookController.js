
//Import models
import User from '../Models/userModel.js';

/*
Webhook is an event-driven method of communication between applications.
https://clerk.com/docs/integrations/webhooks/overview#payload-structure

Clerk - Payload Structure:
- data: contains the actual payload sent by Clerk. The payload can be different depending on the event type.
- object: always set to event
- type: the type of event that triggered the webhook
*/

const handleWebHook = async (req, res) => {
    // Log the incoming request body for debugging
    console.log('Received webhook:', req.body);

    const { type, data } = req.body;

    // Basic validation of the data object
    if (!data || !data.id) {
        console.error('Invalid payload: Missing data or user ID');
        return res.status(400).send('Invalid payload');
    }

    try {
        switch (type) {
            case 'user.created':
                // Handle user created event
                await User.create({
                    clerkUserId: data.id,
                    username: data.username || 'DefaultUsername',
                    email: data.emailAddress || 'default@example.com',
                });
                console.log(`User created: ${data.id}`);
                break;

            case 'user.updated':
                // Handle user updated event
                const [updatedRows] = await User.update(
                    { 
                        username: data.username || null,
                        email: data.emailAddress || null 
                    },
                    { where: { clerkUserId: data.id } }
                );
                if (updatedRows === 0) {
                    console.log(`No user found to update for ID: ${data.id}`);
                } else {
                    console.log(`User updated: ${data.id}`);
                }
                break;

            case 'user.deleted':
                // Handle user deletion
                const deletedRows = await User.destroy({ where: { clerkUserId: data.id } });
                if (deletedRows === 0) {
                    console.log(`No user found to delete for ID: ${data.id}`);
                } else {
                    console.log(`User deleted: ${data.id}`);
                }
                break;

            default:
                console.log(`Unhandled event type: ${type}`);
        }

        // Respond with a 200 OK status
        res.status(200).send('Webhook handled');
    } catch (error) {
        console.error('Error handling webhook:', error);
        // Log the error stack for better debugging
        console.error(error.stack);
        // Respond with a 500 Internal Server Error status
        res.status(500).send('Error handling webhook');
    }
};

export { handleWebHook };
