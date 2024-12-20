import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to MongoDB");
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.listen(3000,()=>{
    console.log("server is running on PORT 3000")
});

// here we gonna use the userRouter 
app.use('/api/user', userRouter)