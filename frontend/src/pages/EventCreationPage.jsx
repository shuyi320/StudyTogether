import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {
    const { user } = useUser();
    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/events', { // Adjust API endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...eventData,
                    userId: user.id, // Attach user ID if needed
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create event');
            }

            // Handle successful event creation (e.g., redirect or show a success message)
            alert('Event created successfully!');
            setEventData({ title: '', date: '', description: '' });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Create Event</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Event Title</label>
                    <input
                        type="text"
                        name="title"
                        value={eventData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Event Date</label>
                    <input
                        type="datetime-local"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
                >
                    {loading ? 'Creating...' : 'Create Event'}
                </button>
                <Link to="/EventList" className="px-4 py-2 ml-9 bg-gray-500 text-white rounded hover:bg-black transition duration-200">
                            Go Back
                        </Link>
            </form>
        </div>
    );
};

export default CreateEvent;
