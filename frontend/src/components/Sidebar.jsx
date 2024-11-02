import React from 'react';
import { useLocation } from 'react-router-dom'; // Use react-router for navigation handling
import SidebarItem from './SidebarItem'; // Import the new SidebarItem component

const navigation = [
  { name: "StudyTogether", href: "/home" },
  { name: "Study Session", href: "/StudySession" },
  { name: "Event", href: "/EventList" },
  { name: "Chat", href: "/chat" },
];

export default function Sidebar() {
  const location = useLocation(); // Get the current path

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800 transition-transform -translate-x-full lg:translate-x-0">
      <ul className="space-y-2 font-medium">
        {navigation.map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            href={item.href}
            isActive={location.pathname === item.href} // Check if the item is active
          />
        ))}
      </ul>
    </aside>
  );
}
