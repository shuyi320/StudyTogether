import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useUser } from '@clerk/clerk-react';

const socket = io("http://localhost:8080");

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const roomId = 123

    useEffect(() => {
        // Fetch messages from the backend
        const fetchMessages = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/message/getMessage/${roomId}`);
                const data = await response.json();
                if (data) {
                    setMessages(data);
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages(); // Call the function to fetch messages
        
        // Listen for new messages from the socket
        socket.on('chatMessage', (data) => {
            console.log("Message received:", data);
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, [roomId]);

    const { isSignedIn, user } = useUser();

    const sendMessage = async (e) => {
        e.preventDefault();
        
        if (message) {
            const msgData = { roomId: roomId, messageId: messages.length+1, senderId: user.id, text: message };

            // Emit the message through Socket.IO
            console.log("Emit the message through Socket.IO")
            socket.emit('chatMessage', msgData);

            // Clear the message input
            setMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-1/4 h-full flex-col bg-gray-200 overflow-y-scroll">
                <Sidebar />
            </div>
            
            <div className="flex-grow mt-20 ml-1/4 flex flex-col h-full bg-white shadow-lg p-4 rounded-md">
                
                <h1 className="text-2xl font-bold mb-4 text-center">Chat</h1>
                <div className="flex-grow border-t border-gray-300 p-4 overflow-y-scroll">
                    {messages.map((msg, index) => (
                        <p key={index} className="mb-2">
                            <strong className="text-indigo-600">{msg.senderId}:</strong> {msg.text}
                        </p>
                    ))}
                </div>
                <form onSubmit={sendMessage} className="flex">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
        
    );
};

export default Chat;

