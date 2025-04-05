import Receiver from '../Models/user.js';
import Joi from 'joi';
import { createClient } from 'redis';
import dotenv from 'dotenv'; 
dotenv.config({ path: '../Config/.env' });
import { v4 as uuidv4 } from 'uuid';

const channel = 'receiver_events';

const redisUrl = 'redis://redis:6379';
console.log(redisUrl)
const client = createClient({ url: redisUrl });

client.on('error', (err) => console.error('Redis Client Error:', err));

async function connectRedis() {
  try {
    await client.connect();
    console.log('Redis client connected successfully.');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
}
await connectRedis();

//Publish message to Redis
const publishMessage = async (message) => {
  try {
    await client.publish(channel, message);
    console.log(`Message published to ${channel}`);
  } catch (err) {
    console.error('Error publishing message:', err);
  }
};

export const createReceiver = async (req, res) => {
  try {
    const schema = Joi.object({
      user: Joi.string().required(),
      class: Joi.string().required(),
      age: Joi.number().integer().required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const receiver = new Receiver(value);
    await receiver.save();
       
    delete receiver._id

    console.log("log====="+receiver);
    
    // Publish event to PubSub
    await publishMessage(JSON.stringify(receiver));

    res.status(201).json(receiver);
  } catch (error) {
    console.error('Error creating receiver:', error);
    res.status(500).json({ error: 'Failed to create receiver' });
  }
};
