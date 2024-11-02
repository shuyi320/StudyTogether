

const navigation = [
    {
        name: "StudyTogether",
        href: "/home",
    },
    {
    name: "Study Session",
    href: "/StudySession",
    },
    {
        name: "Event",
        href: "/EventList",
    },
    {
        name: "Chat",
        href: "/chat",
    },
]

export default function Sidebar() {
  
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 transition-transform -translate-x-full lg:translate-x-0">
      
        <ul className="space-y-2 font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        
    </aside>
  );
}
