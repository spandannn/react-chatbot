import React, { useState, useEffect } from 'react';
import Chatbox from './Components/Chatbox';
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([]);

  // Define sendMessage function to handle sending messages
  const sendMessage = (message) => {
    // Here you can implement sending message functionality, e.g., adding it to the messages state
    setMessages([...messages, { content: message, user: true }]);
    // For demonstration purposes, assuming the response from API is received here
    // You can replace this with actual API call logic
    handleAPIResponse(message);
  };

  // Function to handle API response (for demonstration purposes)
  const handleAPIResponse = async (userMessage) => {
    const url = 'https://ai-api-textgen.p.rapidapi.com/completions';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4f2c1dfc6amsh7c1871aa43704e7p120d8ejsn098fdfd8eb5f',
        'X-RapidAPI-Host': 'ai-api-textgen.p.rapidapi.com'
      },
      body: JSON.stringify({
        init_character: 'you like computers',
        user_name: 'AI',
        character_name: 'Edos',
        text: userMessage // Passing user's message to the API
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      // Handle the result here, you can update messages state with the API response
      setMessages([...messages, { content: result, user: false }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Chatbox messages={messages} onSendMessage={sendMessage} />
    </div>
  );
}

export default App;
