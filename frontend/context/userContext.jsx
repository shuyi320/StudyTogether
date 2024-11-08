import React, { createContext, useContext, useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'

//Create Context
const userContext = createContext(null);

export const UserProvider = ({ children }) => {

    const { user, isLoaded } = useUser(); //Fetch user data from Clerk
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (isLoaded && user) {
            setUserData(user);
        }
    }, [isLoaded, user]);

    return (

        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>

    )
};