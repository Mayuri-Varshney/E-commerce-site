// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 import './CSS/Chat.css';
 




// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

  // useEffect(() => {
  //   async function fetchMessages() {
  //     const response = await axios.get('/api/messages');
  //     setMessages(response.data);
  //   }

  //   fetchMessages();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    // const response = await axios.post('/api/messages', { text: input });
    // setMessages([...messages, response.data]);
  //   setMessages([...messages]);           
  //   setInput('');
  // };

//   return (
//     <div className='chat'>
//       <div className="chat-window">
//         {messages.map((message, index) => (
//           <div key={index} className="message">
//             {message.text}
//           </div>
//         ))}
        
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder='Type Here'
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           required
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;



import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: generateResponse(input), sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const generateResponse = (message) => {
    // Replace this with your chatbot's response logic
    return `You said: ${message}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button style={styles.button} onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    margin: '0 auto',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px',
    height: '80vh',
    background: '#adb5bd',
    
  },
  chatWindow: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '20px',
  },
  button: {
    padding: '15px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '5px',
    background: '#006d77',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '20px',
  },
  userMessage: {
    textAlign: 'right',
    margin: '10px 0',
    background: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '10px',
    opacity: 0,
    animation: 'fadeIn 0.5s forwards',
  },
  botMessage: {
    textAlign: 'left',
    margin: '10px 0',
    background: '#f1f1f1',
    padding: '10px',
    borderRadius: '10px',
    opacity: 0,
    animation: 'fadeIn 0.5s forwards',
  },
};

export default Chatbot;