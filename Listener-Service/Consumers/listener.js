// import dotenv from 'dotenv';
// import { subscribeToMessages } from './Consumers/pubsub.service.js';
// import User from './Models/user.js';
// import { v4 as uuidv4 } from 'uuid'

// dotenv.config({ path: './config/.env' });

// const handleMessage = async (message) => {
//   try {
//     const data = JSON.parse(message);
//     delete data._id; // Remove the _id from the incoming message
//     console.log("Data after deleting _id:", data);
//     const user = new User({
//       user: data.user,
//       class: data.class,
//       age: data.age,
//       email: data.email,
//       inserted_at: data.inserted_at,
//       modified_at: new Date().toISOString()
//     });
//     console.log('Data about to be saved to second table:', user);
//    // const ss = await user.save();
//     console.log('Data saved to second table (result):', ss+"ddddddd"+data);
//   } catch (error) {
//     console.error('Error processing message:', error);
//   }
// };

// // Subscribe to messages from the Receiver Service
// subscribeToMessages(handleMessage);


