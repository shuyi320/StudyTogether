import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { FaHome, FaUserFriends, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { useState, useEffect } from 'react'

const navigation = [
  { name: "StudyTogether", href: "/home", icon: <FaHome /> },
  { name: "Study Session", href: "/StudySession", icon: <FaUserFriends /> },
  { name: "Event", href: "/EventList", icon: <FaCalendarAlt /> },
  { name: "Friends", href: "/friends", icon: <FaUserFriends /> },
  { name: "Chat", href: "/chat", icon: <FaComments /> },
];

export default function Sidebar() {
  const location = useLocation();
  const { user } = useUser()

  return (
    <aside className="fixed top-10 left-0 z-40 w-60 h-screen bg-gray-900 text-white shadow-lg">
      <div className="lg:flex sm:flex flex-col items-center pt-10 gap-2">
        <img
          src={user.imageUrl}
          alt={user.id}
          className="rounded-full w-12 h-12 lg:w-20 lg:h-20"
        />
        <span className="lg:block text-white text-center font-poppins text-sm">
          {user.emailAddresses[0].emailAddress}
        </span>
      </div>
      <ul className="mt-8 space-y-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link to={item.href}
              className={`flex items-center p-6 rounded-lg transition-colors duration-200  
            ${location.pathname === item.href ? 'bg-indigo-600' : 'hover:bg-gray-800'}`}>
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside >
  );
}
