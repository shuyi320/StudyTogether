import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Study Buddy. All rights reserved.</p>
                <p>
                    <a href="#about-us" className="text-indigo-400 hover:underline">About Us</a> |
                    <a href="/contact" className="text-indigo-400 hover:underline"> Contact</a>
                </p>
            </div>
        </footer>
    );
}
