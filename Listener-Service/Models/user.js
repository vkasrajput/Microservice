// Listener-Service/Models/user.js
import mongoose from 'mongoose';

const receiverHistorySchema = new mongoose.Schema({
  id:String,
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: Date,
  modified_at: { type: Date, default: Date.now },
});

export default mongoose.model('Listener', receiverHistorySchema);