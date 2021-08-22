import express from 'express';
import config from './common/config.js';
import logger from './logger/logger.js';
import userRouter from './users/user.router.js';

const PORT = config.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Web server works!');
});

app.use('/users', userRouter);

app.listen(PORT, () => {
  logger.info(`Web server started on port ${PORT}`);
});