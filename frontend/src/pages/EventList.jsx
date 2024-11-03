import React, { useEffect, useState } from 'react';


import EventCard from '../components/EventCard'; // Import your EventCard component
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchEvents();
    }, [page]);

    const fetchEvents = async () => {
        setLoading(true);
        const response = await fetch(`/api/events?page=${page}`);
        const newEvents = await response.json();
        setEvents((prev) => [...prev, ...newEvents]);
        setLoading(false);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.offsetHeight
        ) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Sidebar />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                        />
                    ))}
                </div>
                {loading && <p className="text-center mt-4">Loading more events...</p>}
            </div>
        </>

    );
};

export default EventList;
