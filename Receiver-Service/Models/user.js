import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const receiverSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: () => uuidv4(),
    immutable: true,
  },
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: { type: Date, default: Date.now },
});

export default mongoose.model('Receiver', receiverSchema);