import { useEffect, useState } from 'react';
import { FaCalendarPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

//Import Components
import EventCreate from '../components/EventCreate';
import EventCard from '../components/EventCard';
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
            <div className="flex items-center justify-center min-h-screen">
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

                {/* Event Creation Component*/}
                <div className='fixed bg-gray-300 text-black bottom-5 right-5 p-3 rounded-full'>
                    <span className="w-8 h-8 flex items-center justify-center text-2xl">
                        {/* Event Creation Button Here*/}

                    </span>
                </div>
            </div>

        </>

    );
};

export default EventList;
