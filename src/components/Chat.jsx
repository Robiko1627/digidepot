import { useState, useEffect, useRef } from 'react';
import './Chat.css'; // Make sure your Chat.css is updated as well

const pairs = [
  { pattern: /hi|hello|hey|good morning|good afternoon|good evening/, response: ["Hello! How can I assist you today?", "Hi there, how can I help you?"] },
  { pattern: /how are you\?/, response: ["I'm doing great, thanks for asking!", "I'm doing well, how about you?"] },
  { pattern: /open on weekends/, response: ["Yes, we are open 24/7, and our support is available every day from 8 AM to 8 PM."] },
  { pattern: /delivery time|delivery|duration/, response: ["Delivery typically takes 1-2 business days depending on your location."] },
  { pattern: /return policy|not working/, response: ["You can return items within 7 days if defective or not as described."] },
  { pattern: /mpesa/, response: ["We support M-PESA as a payment method along with other options."] },
  { pattern: /discount/, response: ["We have a 10% discount on select appliances like LG and Samsung fridges."] },
  { pattern: /what is digidepot\?/, response: ["DigiDepot is Kenya's go-to online store for top-quality home appliances."] },
  { pattern: /.*/, response: ["Sorry, I didn't quite catch that. Could you please clarify?"] }
];

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { type: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);

    const match = pairs.find(pair => new RegExp(pair.pattern).test(trimmed.toLowerCase()));
    const response = match ? match.response[Math.floor(Math.random() * match.response.length)] : "Sorry, can you rephrase?";
    const botMessage = { type: 'bot', text: response };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInput('');
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
