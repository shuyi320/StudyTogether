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
            <div className="p-4 flex justify-center">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    {userInfo ? (
                        <div className="mt-4">
                            <h2 className="text-xl">User Information:</h2>
                            <p><strong>User ID:</strong> {userInfo.id}</p>
                            <p><strong>First Name:</strong> {userInfo.firstName || 'N/A'}</p>
                            <p><strong>Last Name:</strong> {userInfo.lastName || 'N/A'}</p>
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
