import winston from 'winston';
import config from '../common/config.js';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (config.NODE_ENV === 'development') {
  logger.add(new winston.transports.Console({
    format: winston.format.colorize({ all: true }),
  }));
}

export default logger;