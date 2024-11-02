import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";

const EventList = () => {
    const [events, setEvents] = useState([]); // State to store fetched events
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle errors

    // Function to fetch events from the backend
    const fetchEvents = async () => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT/events'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEvents(data); // Assuming the API returns an array of events
        } catch (err) {
            setError(err.message); // Set error message in state
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    useEffect(() => {
        fetchEvents(); // Fetch events when the component mounts
    }, []);

    return (
        <div className="flex justify-around">
            <div className="flex-col">
                <Sidebar />
                <div className="flex gap-x-16">
                    <h1 className='flex-1'>Event List</h1>
                </div>
                {loading ? (
                    <p>Loading events...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <div className="event-list">
                        {events.map(event => (
                            <div key={event.id} className="event-item">
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                                {/* Add more event details as needed */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventList;
