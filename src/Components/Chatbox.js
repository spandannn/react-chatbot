import React from 'react';

const Chatbox = ({ messages, onSendMessage }) => {
  const messageList = messages.map((message) => (
    <li key={message.content} className={`message ${message.user ? 'user' : ''}`}>
      {message.content}
    </li>
  ));

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.messageInput.value.trim();
    if (message) {
      onSendMessage(message);
      event.target.elements.messageInput.value = '';
    }
  };

  return (
    <div className="chatbox">
      <ul>{messageList}</ul>
      <form onSubmit={handleSendMessage}>
        <input type="text" id="messageInput" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbox;
