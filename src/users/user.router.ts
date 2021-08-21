import express, { Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import * as usersService from './user.service.js';

const router = express.Router();
router.route('/').get(
  async (_: Request, res: Response) => {
    const users = await usersService.getAll();
    res.json(users);
  },
);

router.route('/:id').get(
  async (req: Request, res: Response) => {
    const reqId = req.params['id'] as string;
    const user = await usersService.getById(reqId);
    res.status(statusCodes.OK).json(user);
  },
);

router.route('/').post(
  async (req: Request, res: Response) => {
    const newUser = await usersService.add(req.body);
    res.status(statusCodes.CREATED).send(newUser);
  },
);

export default router;
