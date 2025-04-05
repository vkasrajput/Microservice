
import express from 'express';
import receiverRoutes from './Route/Receiver.js';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
dotenv.config({ path: './Config/.env' }); 

const app = express();
app.use(express.json());
let url=process.env.MONGODB_URI
console.log(url)
mongoose.connect(url).then(()=>{console.log("Db Connected")
}).catch((er)=>{console.log("error:"+er);
})
app.use('/receiver', receiverRoutes);
console.log(process.env.PORT);

const port = process.env.PORT || 3001; 

app.listen(port, () => {
  console.log(`Receiver Service listening on port ${port}`);
});

export default app;