// server.js
import express from 'express';
import { createServer } from 'http';
import { Server as SocketIO } from 'socket.io';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const httpServer = createServer(app);
const io = new SocketIO(httpServer);

// Serve static files from the 'public' directory
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chatMessage', async (msg) => {
        try {
            // Encode the user's message for URL compatibility
            const encodedMessage = encodeURIComponent(msg);
            // Use your Wolfram Alpha App ID, ensure it's set in your .env file or replace 'DEMO' with it directly here
            const appid = process.env.WOLFRAM_APP_ID || 'DEMO';
            const url = `http://api.wolframalpha.com/v1/conversation.jsp?appid=${appid}&i=${encodedMessage}`;
            
            const response = await axios.get(url);
            const answer = response.data.result || "Sorry, I couldn't get an answer.";
            
            // Broadcast the answer to all connected clients
            io.emit('chatMessage', answer);
        } catch (error) {
            console.error('API request failed:', error);
            io.emit('chatMessage', "There was an error processing your request.");
        }
    });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
