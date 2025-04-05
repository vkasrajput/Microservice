import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'; // Replace with your Redis URL

const client = createClient({ url: redisUrl });

// // Connection event handlers
// client.on('error', (err) => console.error('Redis Client Error', err));
// client.on('connect', () => console.log('Redis client connected'));
// client.on('ready', () => console.log('Redis client ready'));
// client.on('end', () => console.log('Redis client disconnected'));
// client.on('reconnecting', () => console.log('Redis client reconnecting'));

// Connect to Redis
async function connectRedis() {
  try {
    await client.connect();
    console.log('Redis connection successful');
  } catch (err) {
    console.error('Redis connection failed:', err);
  }
}

// Perform Redis operations
async function redisOperations() {
  try {
    await client.set('mykey', 'myvalue');
    const value = await client.get('mykey');
    console.log('Retrieved value:', value);
  } catch (err) {
    console.error('Redis operation failed:', err);
  }
}

// Main execution
connectRedis().then(redisOperations).catch((err) => {
    console.error("Main execution error", err);
});

