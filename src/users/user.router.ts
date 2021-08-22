import express, { Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import * as usersService from './user.service.js';
import multerMw from '../middleware/multer.js';
import savePhoto from '../helpers/savePhoto.js';
import wrapAsync from '../errors/wrapAsync.js';

const router = express.Router();
router.route('/').get(
  wrapAsync(async (_: Request, res: Response) => {
    const users = await usersService.getAll();
    res.json(users);
  }),
);

router.route('/:id').get(
  wrapAsync(async (req: Request, res: Response) => {
    const reqId = req.params['id'] as string;
    const user = await usersService.getById(reqId);
    res.status(statusCodes.OK).json(user);
  }),
);

router.post('/', multerMw,
  wrapAsync(async (req: Request, res: Response) => {
    if (!req.file) {
      throw Error('No photo file!');
    }
    
    req.body.photoUrl = await savePhoto(req.file);
    const newUser = await usersService.add(req.body);
    res.status(statusCodes.CREATED).send(newUser.id);
  }),
);

export default router;
