
  


// import React, { useState } from 'react';
// import Message from './message';
// import UserInput from './UserInput';
// import axios from 'axios';

// const ChatContainer = () => {
//   const [messages, setMessages] = useState([]);

//   const getOpenAIResponse = async (userMessage) => {
//     try {
//       const apiKey = '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'; // Replace with your actual API key
//       const apiUrl = 'https://api.openai.com/v1/completions'; // Updated endpoint

//       const response = await axios.post(
//         apiUrl,
//         {
//           messages: [
//             { role: 'system', content: 'You are a helpful assistant.' },
//             { role: 'user', content: userMessage },
//           ],
//           model: "gpt-3.5-turbo",
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`,
//           },
//         }
//       );

//       return response.data.choices[0].text.trim();
//     } catch (error) {
//       console.error('Error fetching OpenAI response:', error);
//       return 'Error fetching response';
//     }
//   };

//   const handleSendMessage = async (text) => {
//     // Update the state with the user message
//     setMessages((prevMessages) => [...prevMessages, { text, isUser: true }]);

//     // Fetch the OpenAI response
//     const aiResponse = await getOpenAIResponse(text);

//     // Update the state with the AI response
//     setMessages((prevMessages) => [...prevMessages, { text: `AI: ${aiResponse}`, isUser: false }]);
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages">
//         {messages.map((message, index) => (
//           <Message key={`${message.text}-${index}`} text={message.text} isUser={message.isUser} />
//         ))}
//       </div>
//       <UserInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// };

// export default ChatContainer;


import React, { useState } from 'react';
import Message from './message';
import UserInput from './UserInput';
import axios from 'axios';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  const getOpenAIResponse = async (userMessage) => {
    try {
      const apiKey = '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'; // Replace with your actual API key
      const apiUrl = 'https://api.openai.com/v1/chat/completions';

      const response = await axios.post(
        apiUrl,
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      return 'Error fetching response';
    }
  };

  const handleSendMessage = async (text) => {
    // Update the state with the user message
    setMessages((prevMessages) => [...prevMessages, { text, isUser: true }]);

    // Fetch the OpenAI response
    const aiResponse = await getOpenAIResponse(text);

    // Update the state with the AI response
    setMessages((prevMessages) => [...prevMessages, { text: `AI: ${aiResponse}`, isUser: false }]);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={`${message.text}-${index}`} text={message.text} isUser={message.isUser} />
        ))}
      </div>
      <UserInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
