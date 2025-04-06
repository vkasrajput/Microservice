
import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const channel = 'receiver_events';

// Create and connect the Redis client
const redisUrl = process.env.REDIS_URL;
const client = createClient({ url: redisUrl });

client.on('error', (err) => console.error('Redis Client Error:', err));

async function connectRedis() {
  try {
    if (!client.isOpen) { 
      await client.connect();
      console.log('Redis client connected successfully.');
    }
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
}

await connectRedis();

// Function to publish a message to the channel
export const publishMessage = async (message) => {
  try {
    await client.publish(channel, message);
    console.log(`Message published to ${channel}`);
  } catch (err) {
    console.error('Error publishing message:', err);
  }
};

// Function to subscribe to messages
export const subscribeToMessages = async (callback) => {
  try {
    await client.subscribe(channel, (message) => {
      console.log(`Received message from ${channel}:`, message);
      callback(message);
    });
  } catch (err) {
    console.error('Error subscribing to messages:', err);
  }
};
