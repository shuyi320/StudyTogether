import { Link } from 'react-router-dom';

// Import components

// Import assets 
import chatBubble from '../assets/chatBubbles.png';
import online from '../assets/zoom.png';

export default function AboutUs() {
    return (
        <>
            <section className='w-full flex flex-col items-center bg-gray-100 py-10'>
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-6">
                        What is StudyBuddy?
                    </h1>
                    <p className="text-gray-700 text-lg font-poppins mb-8">
                        As students and lifelong learners, we have all felt lost in a classroom before.
                        In today’s fast-paced environment, it becomes harder to keep up with course material or find the time to learn new skills.
                        The increasing demands on students’ time, coupled with distractions from social media, make it crucial to create effective support systems.
                        Our team aims to develop a platform for students to study together and find study buddies, whether in school or learning new skills.
                        This platform will facilitate both in-person and virtual study sessions, enabling users to connect and share resources.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                    <div className='flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-md'>
                        <h2 className="font-bold font-poppins text-2xl text-lightBeige mb-2">
                            Study in an Online Room
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Join our online study rooms to collaborate with peers and enhance your learning experience.
                        </p>
                        <img className='h-auto max-h-48 w-auto mb-4' src={online} alt='Online Study Room' />
                        <Link to='/sessions' className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                            Join Online Room
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-md'>
                        <h2 className="font-bold font-poppins text-2xl text-lightBeige mb-2">
                            Study In-Person
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Find study groups and meet in person to collaborate and study together.
                        </p>
                        <img className='h-auto max-h-48 w-auto mb-4' src={chatBubble} alt='In-Person Study Group' />
                        <Link to="/events" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                            Find In-Person Group
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
