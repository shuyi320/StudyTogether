import React from 'react';

// Import Components
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

export default function AboutUsPage() {
    return (

        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow mt-16">
                    <AboutUs />
                </div>
            </div>
            <Footer />
        </>

    );
}
