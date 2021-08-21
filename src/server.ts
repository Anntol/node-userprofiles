import express from 'express';
import userRouter from './users/user.router.js';

const PORT = process.env['PORT'] || 5000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Web server works!');
});

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Web server started on port ${PORT}`);
});