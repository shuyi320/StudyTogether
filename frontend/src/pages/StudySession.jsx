//StudySession.jsx
//

import React, { useEffect, useState } from "react";

//Import Components
import Sidebar from "../components/Sidebar";

const StudySession = () => {


    return (
        <>
            <Sidebar />

            <div className="flex justify-around">
                <div className="flex-col">
                    <div className="flex gap-x-16">
                        {/* Load Existing study sessions*/}
                        {

                        }
                        <h1 className='flex-1'>StudySession</h1>
                        <h1 className='flex-1'>StudySession</h1>
                    </div>
                </div>

            </div>
        </>

    )
};

export default StudySession;