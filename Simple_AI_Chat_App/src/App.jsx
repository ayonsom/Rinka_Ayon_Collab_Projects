
import { useState, useEffect, useRef, forwardRef } from "react";

const ChatMessage = ({ message }) => {
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={`chat-message ${message.sender}`}>
      <div className="message-bubble">
        <div className="message-content">{message.text}</div>
      </div>
      <div className="timestamp">{formattedTime}</div>
    </div>
  );
};

const ChatInput = forwardRef(({ onSendMessage, isLoading }, ref) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          isLoading ? "Waiting for response..." : "Type a message..."
        }
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || !message.trim()}>
        {isLoading ? (
          <>
            <span className="loading-spinner" />
            Thinking
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
});

const sendMessage = async (message) => {
  const delay = 1000 + Math.random() * 2000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    id: Date.now(),
    text: "Message received, thanks!",
    sender: "bot",
    timestamp: new Date().toISOString()
  };
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  const handleSendMessage = async (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date().toISOString()
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);
    try {
      const botResponse = await sendMessage(text);
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Chat Application</h1>
      </header>

      <div className="messages-container">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        ref={inputRef}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
export default App;