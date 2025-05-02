import React, { useState, useEffect } from 'react';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../firebase'; // Make sure you have firebase configured

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    text: '',
  });

  // Generate random names
  const randomNames = ['Anonymous Friend', 'Secret Admirer', 'Mystery Well-wisher', 'Silent Supporter', 'Unknown Cheerleader'];
  const getRandomName = () => randomNames[Math.floor(Math.random() * randomNames.length)];

  // Load messages from Firebase on component mount
  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.entries(data).map(([id, message]) => ({
          id,
          ...message,
        }));
        setMessages(loadedMessages);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.text.trim()) return;

    const messageToSend = {
      name: getRandomName(),
      text: newMessage.text,
      date: new Date().toISOString(), // Current date when submitted
    };

    push(ref(database, 'messages'), messageToSend)
      .then(() => {
        setNewMessage({ text: '' });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className='text-center mb-8'>
        <h1 className="text-2xl font-bold mb-2">Hi, Thanks for dropping by!</h1>
        <h2 className="text-gray-600">Feel free to drop me a word of encouragement!</h2>
      </div>

      {/* Messages Grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="font-semibold text-lg mb-2">{message.name}</div>
              <p className="text-gray-700 mb-3">{message.text}</p>
              <div className="text-xs text-gray-500">
                {new Date(message.date).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500 py-8">
            No messages yet. Be the first to leave an encouragement!
          </div>
        )}
      </div>

      {/* Chat Input Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Leave a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="text"
              name="text"
              value={newMessage.text}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write something encouraging..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}