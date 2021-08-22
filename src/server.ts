import express from 'express';
import config from './common/config.js';
import logger from './logger/logger.js';
import userRouter from './users/user.router.js';
import errorHandler from './errors/errorHandler.js';

const PORT = config.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Web server works!');
});

app.use('/users', userRouter);

app.use(errorHandler);

process.on('unhandledRejection', (err: Error) => {
  const { message, stack } = err;
  logger.error(`Unhandled rejection occured! ${message}. Stack: ${stack}`);
  process.exit(1);
});

process.on('uncaughtException', (err: Error) => {
  const { message, stack } = err;
  logger.error(`Uncaught exception occured! ${message}. Stack: ${stack}`);
  process.exit(1);
});

app.listen(PORT, () => {
  logger.info(`Web server started on port ${PORT}`);
});