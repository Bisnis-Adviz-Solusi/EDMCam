import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT
const mongoUri = process.env.MONGO_URI

async function main() {
  await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
}
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
main().catch(console.dir);

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Was machst du hier?');
})

app.listen(port, () => {
  console.log(`EDMC server listening on port http://localhost:${port}`)
})
