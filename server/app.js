import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authorization from './.middleware/authorization.js';

const app = express();
const port = process.env.PORT
const mongoUri = process.env.MONGO_URI

//connect DB
async function connectDB() {
  await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
}
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
connectDB().catch(console.dir);

//======== middlewares ========//
//cors
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

//cookies parser
app.use(cookieParser());

//=========== routes ===========//

//handle request HTTP
app.listen(port, () => {
  console.log(`EDMC server listening on port http://localhost:${port}`)
})

//get data 
app.get('/', (req, res) => {
  res.send('Was machst du hier?');
})

//testing purposes
app.get('/test', authorization)
