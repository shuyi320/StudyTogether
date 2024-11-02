import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '@clerk/clerk-react';

/*
    User object properties:
    https://clerk.com/docs/references/javascript/user/user
*/
const Dashboard = () => {
    const { isSignedIn, user } = useUser(); // Get user info from Clerk
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        console.log('isSignedIn:', isSignedIn);
        console.log('User:', user);
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
            {/* Logging user data*/}
            <div className="p-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                {userInfo ? (
                    <div className="mt-4">
                        <h2 className="text-xl">User Information:</h2>
                        <p><strong>User ID:</strong> {userInfo.id}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>First Name:</strong> {userInfo.firstName || 'N/A'}</p>
                        <p><strong>Last Name:</strong> {userInfo.lastName || 'N/A'}</p>
                    </div>
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
        </>
    );
};

export default Dashboard;
