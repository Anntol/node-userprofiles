import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import logger from '../logger/logger.js';
import notFoundError from './NotFoundError.js';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err) {        
    if (err instanceof notFoundError) {
      res.status(err.status).send(err.message);
    } else {
      if (err.message) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(err.message);
      } else {
        res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR);
      }
    }

    const { protocol, method, originalUrl, body, query } = req;
    logger.error(`Request ${protocol} ${method} ${originalUrl}, body: ${JSON.stringify(body)}, 
      query parameters: ${JSON.stringify(query)} responded with status ${res.statusCode}`);
  }  
  next();
};

export default errorHandler;
