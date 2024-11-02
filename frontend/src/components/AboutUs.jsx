import online from '../assets/zoom.png'
import chatBubble from '../assets/chatBubbles.png'
import { Link } from 'react-router-dom';

// import Image from 'next/image'

export default function AboutUs() {
    return (
        <section className=' w-full h-100 flex items-center px-10 md:px-24 py-10 '>
            <div className=" flex flex-col items-center ">
                <h1 className="text-4xl md:text-5xl font-bold font-poppin  text-primary leading-tight">What is StudyTogether?</h1>
                <p className="text-gray text-lg font-poppins  pt-10 text-wrap ">
                    As students and as lifelong learners, we have all felt lost in a classroom before.
                    In today’s fast-paced environment, it becomes harder and harder to keep up with course material or find the time to learn a skill.
            The increasing demands on students’ time, coupled with distractions from social media, make it crucial to create effective support systems.
                    Our team aims to develop a platform for which students can study together and find study buddies, whether in school or learning skills you want.
            This platform will facilitate both in-person and virtual study sessions, enabling users to find study buddies and share resources, ultimately helping them keep up with course material.
                </p>

                <div className="pt-10 flex justify-space gap-x-20">
                    <div className='flex-1  items-center text-center'>
                        <h1 className="font-bold font-poppins text-2xl text-lightBeige">Study in an Online Room</h1>
                        <p>Join our online study rooms to collaborate with peers and enhance your learning experience.</p>
                        <img className='h-30 w-30 py-12' src={online} alt='' />
                        <Link to='/StudySession' className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">Join Online Room</Link>
                    </div>
                    <div className='flex-1  items-center text-center'>
                        <h1 className="font-bold font-poppins text-2xl text-lightBeige">Study In-Person</h1>
                        <p>Find study groups and meet in person to collaborate and study together.</p>
                        <img className='h-30 w-30 py-10' src={chatBubble} alt='' />
                        <Link to="/EventList" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">Find In-Person Group</Link>
                    </div>
                    
                </div>
            </div>
            
            


        </section>
    )
}
