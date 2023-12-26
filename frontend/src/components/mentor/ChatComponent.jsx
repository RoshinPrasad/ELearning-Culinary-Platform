import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Face2Icon from '@mui/icons-material/Face2';
import Divider from '@mui/material/Divider';

const ChatComponent = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Kumarettan' },
    { id: 2, name: 'Pyaru' },
    { id: 3, name: 'Shantamma' },
    { id: 4, name: 'Susu' },
    { id: 5, name: 'Alice' },
    { id: 6, name: 'Bob' },
   
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    
    if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [users]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { content: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <Stack direction="row" >
      
      <List style={{ width: '300px', padding: '5px' }}>
      
      <TextField
        label="Search Users"
        type="search"
        sx={{ width: '290px' }}
      />
        {users.map((user) => (
          <ListItem
            key={user.id}
            button
            onClick={() => setSelectedUser(user)}
            sx={{ cursor: 'pointer',borderLeft: '1px solid #ddd' ,borderBottom: '1px solid #ddd', borderTop: '1px solid #ddd', marginTop:'3px' }}
          >
            {user.name}
          </ListItem>
        ))}
      </List>

    
      <Box sx={{ border: '1px solid black', width: '800px', height: '565px' }}>
      
        <Box sx={{ padding: '1rem 1rem 5rem', }}>
          {selectedUser ? (
            <>
              <Typography variant="h5"><Face2Icon /> {selectedUser.name}</Typography>
              <Divider sx={{ margin: '0.5rem 0', backgroundColor: 'black' }} /> 
            </>
          ) : null}
        </Box>

        {/* Message Area */}
        <Box
          sx={{
            height: '350px',
            overflowY: 'auto',
            borderBottom: '1px solid #ddd',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column-reverse', // Reverse direction to display messages from bottom to top
          }}
        >
          {messages.slice(0).reverse().map((message, index) => (
            <Chip
              key={index}
              label={message.content}
              sx={{
                marginBottom: '0.5rem',
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                display: 'block', // Display each chip as a block
              }}
            />
          ))}
        </Box>

        {/* Input Area */}
        {selectedUser && (
          <Box sx={{ borderTop: '1px solid #ddd', padding: '1rem', display: 'flex' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Type your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              sx={{ marginLeft: '1rem' }}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default ChatComponent;
