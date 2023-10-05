
import React from 'react';
// import './Message.css'; // You can style it with CSS or use a styling library

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'ai'}`}>
      {text}
    </div>
  );
};

export default Message;
