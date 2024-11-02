import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('Hello, Study Buddy :)');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-4">{greeting}</div>
      <button
        onClick={() => setGreeting('Welcome to StudyTogether!')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Change Greeting
      </button>
    </div>
  );
}

export default App;
