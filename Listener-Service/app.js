import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './Models/user.js';
dotenv.config({ path: './config/.env' });
import { subscribeToMessages } from './Consumers/pubsub.service.js';



const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('app DB Connected'))
    .catch((err) => console.error('DB Connection Error:', err));

// Listener function to save data to the second table
const handleMessage = async (message) => {
    try {
        const data = JSON.parse(message);
        data.modified_at = new Date().toISOString();
        const newUser = new User({
            id:data.id,
            user: data.user,
            class: data.class,
            age: data.age,
            email: data.email,
            inserted_at: data.inserted_at,
            modified_at: new Date().toISOString()
          });
        await newUser.save();
        console.log('Data saved to second table:', newUser);
    } catch (error) {
        console.error('Error processing message:', error);
    }
};

// Subscribe to messages from the Receiver Service
subscribeToMessages(handleMessage);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`app Service running on port ${port}`);
});
