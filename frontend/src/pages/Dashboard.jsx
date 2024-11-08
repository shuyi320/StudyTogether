import { useEffect, useRef, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

//Import components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EventCreate from '../components/EventCreate';

const Dashboard = () => {
    const { isSignedIn, user } = useUser();
    const [userInfo, setUserInfo] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Ref for the form to detect clicks outside it
    const formRef = useRef(null);

    useEffect(() => {
        if (isSignedIn && user) {
            setUserInfo(user);
        }
    }, [isSignedIn, user]);

    // If user is not signed in, show login message
    if (!isSignedIn) {
        return <div>You are not logged in.</div>;
    }

    const UserProfile = ({ userInfo }) => (
        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-md">
            <div className="flex gap-6 items-center">
                <img
                    src={userInfo?.imageUrl}
                    alt="User Avatar"
                    className="rounded-full w-20 h-20 lg:w-20 lg:h-20 object-cover"
                />
                <div className="flex flex-col py-3">
                    <h3 className="text-xl font-bold">{userInfo?.username}</h3>
                    <p className="text-gray-500">Buddy ID: {userInfo?.id}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="ml-60 p-20 flex justify-center">
                <div>
                    <h1 className="text-2xl text-gray-700 font-bold mb-4">Welcome Back</h1>
                    {!userInfo ? (
                        <div className="flex justify-center items-center py-4">
                            <span className="loader"></span>
                            <p className="ml-2 text-gray-500">Loading your profile...</p>
                        </div>
                    ) : (
                        <UserProfile userInfo={userInfo} />
                    )}
                </div>
            </div>


        </>
    );
};

export default Dashboard;
