import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const { isSignedIn, user } = useUser();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (isSignedIn && user) {
            setUserInfo(user);
        }
    }, [isSignedIn, user]);

    if (!isSignedIn) {
        return <div>You are not logged in.</div>;
    }

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="p-20 flex justify-center">
                <div className="">
                    <h1 className="text-2xl text-gray-700 font-bold mb-4">Welcome Back</h1>
                    {userInfo ? (
                        <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-md'>
                            <div className='flex gap-6'>
                                <img src={userInfo.imageUrl} className="flex-col-2 rounded-full w-20 h-20 lg:w-20 lg:h-20" />
                                <div className='flex-col-8 py-3'>
                                    <h3 className='text-xl font-bold'>{userInfo.username}</h3>
                                    <p className='text-gray-500'>Buddy ID: {userInfo.id}</p>
                                </div>
                            </div> 
                        </div>
                    ) : (
                        <p>Loading user information...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
