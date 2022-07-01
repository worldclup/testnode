import express from 'express';
import cors from 'cors';

import userroute from './src/route/user_route.js'

// import User

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors([
  'http://localhost:3000',
]));

app.use('/user', userroute)

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log('Server running on port :', port);
});