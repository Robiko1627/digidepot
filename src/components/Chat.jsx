import { useState, useEffect, useRef } from 'react';
import './Chat.css';

const pairs = [
  {
    pattern: /\b(hi|hello|hey|greetings|good (morning|afternoon|evening))\b/,
    response: [
      "Hi there! 👋 Looking for something in particular?",
      "Welcome to DigiDepot! How can I assist you today?"
    ]
  },
  {
    pattern: /\bhow (are|r) (you|u)\b/,
    response: [
      "I'm great, thanks! Ready to help you with anything at DigiDepot 😊",
      "Doing well! What can I help you shop for today?"
    ]
  },
  {
    pattern: /\b(what is digidepot|who are you|about digidepot|what do you sell)\b/,
    response: [
      "DigiDepot is Kenya’s go-to online store for affordable, high-quality home tech and appliances.",
      "We sell everything from TVs and fridges to laptops and kitchen gadgets!"
    ]
  },
  {
    pattern: /\b(tv|television|fridge|refrigerator|microwave|oven|blender|laptop|phone|washing machine|freezer|speakers|soundbar|air conditioner|iron|kettle|toaster|home appliances|gadgets)\b/,
    response: [
      "Yes, we have all those items! ✅ Check our homepage to browse fridges, TVs, blenders, laptops, soundbars, and more.",
      "Looking for appliances? We’ve got TVs, LG & Samsung fridges, microwaves, washing machines, and even kettles!"
    ]
  },
  {
    pattern: /\b(lg|samsung|ramtons|sony|bosch|philips|hisense|lenovo|hp|dell|asus)\b/,
    response: [
      "Yes, we stock products from LG, Samsung, HP, Ramtons, Hisense, and more!",
      "You can find top brands like LG, Bosch, Lenovo, Sony, and Philips in our store!"
    ]
  },
  {
    pattern: /\b(do you have|in stock|available|can I get|sell|buy)\b/,
    response: [
      "Most of our products are in stock and ready for delivery. What are you looking for?",
      "Yes! Our items are available online and ready for M-PESA checkout."
    ]
  },
  {
    pattern: /\b(mpesa|pay|payment|checkout|buy|how to pay|purchase)\b/,
    response: [
      "You can pay using M-PESA during checkout. It's fast and secure!",
      "Click 'Buy Now' on any product, then choose M-PESA or other options to pay."
    ]
  },
  {
    pattern: /\b(delivery|ship|shipping|how long|arrive)\b/,
    response: [
      "Delivery usually takes 1–2 working days depending on your location 📦",
      "We deliver across Kenya — most orders arrive within 24–48 hours!"
    ]
  },
  {
    pattern: /\b(return|not working|refund|broken|wrong item|problem|defective)\b/,
    response: [
      "Sorry to hear that. You can return products within 7 days if they’re faulty or not as described.",
      "Our return policy allows exchanges or refunds for damaged or incorrect items. We’ve got you covered!"
    ]
  },
  {
    pattern: /\b(discount|offer|sale|promotion|deal|promo)\b/,
    response: [
      "We currently have a 10% discount on LG and Samsung appliances 🎉",
      "Don't miss out! Check our site for current promotions on TVs, fridges, and more."
    ]
  },
  {
    pattern: /\b(open|hours|support|when|weekends|contact)\b/,
    response: [
      "We're open 24/7 online, and support is active from 8AM to 8PM every day.",
      "You can shop anytime! Our customer service team is here daily between 8AM and 8PM."
    ]
  },
  {
    pattern: /\b(search|find|looking for|how to find|locate|browse)\b/,
    response: [
      "Use the search bar to find any product quickly by name, category, or brand.",
      "Try typing the product name in the search field at the top of the homepage!"
    ]
  },
  {
    pattern: /\b(thank(s)?|thank you|appreciate|grateful)\b/,
    response: [
      "You're welcome! Let me know if there's anything else I can assist you with 😊",
      "Glad to help! Enjoy shopping with DigiDepot!"
    ]
  },
  {
    pattern: /\b(bye|goodbye|see you|later|exit)\b/,
    response: [
      "Goodbye! Come back anytime 👋",
      "See you soon! Thanks for choosing DigiDepot."
    ]
  },
  {
    pattern: /.*/,
    response: [
      "Hmm, I'm not sure I understood that. Could you try asking about products, payment, or delivery?",
      "Sorry, I didn’t get that. I can help you with shopping, payment, delivery, and more!"
    ]
  }
];

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [failCount, setFailCount] = useState(0);
  const endRef = useRef(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { type: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);

    const match = pairs.find(pair => new RegExp(pair.pattern).test(trimmed.toLowerCase()));
    let responseText = '';

    if (match && match.pattern.toString() !== '/.*/') {
      responseText = match.response[Math.floor(Math.random() * match.response.length)];
      setFailCount(0);
    } else {
      const fallback = pairs.find(p => p.pattern.toString() === '/.*/');
      responseText = fallback.response[Math.floor(Math.random() * fallback.response.length)];
      setFailCount(prev => prev + 1);
    }

    const botMessage = { type: 'bot', text: responseText };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);

      if (failCount + 1 >= 5) {
        const referral = {
          type: 'bot',
          text: `It seems you're having some trouble. You can reach us directly for help:\n📞 +254 726 338 405\n📧 digidepot@gmail.com\n📸 Instagram: [_.simply_robin._](https://instagram.com/_.simply_robin._)`
        };
        setMessages(prev => [...prev, referral]);
        setFailCount(0);
      }
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
