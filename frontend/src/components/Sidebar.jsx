import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { FaHome, FaUserFriends, FaCalendarAlt, FaComments } from 'react-icons/fa';

const navigation = [
  { name: "StudyTogether", href: "/home", icon: <FaHome /> },
  { name: "Study Session", href: "/StudySession", icon: <FaUserFriends /> },
  { name: "Event", href: "/EventList", icon: <FaCalendarAlt /> },
  { name: "Friends", href: "/friends", icon: <FaUserFriends /> },
  { name: "Chat", href: "/chat", icon: <FaComments /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed top-10 left-0 z-40 w-60 h-screen bg-gray-900 text-white shadow-lg">
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
