import User, { IUser } from './user.model.js';
import * as usersRepo from './user.memory.repository.js';

const getAll = (): Promise<IUser[]> => usersRepo.getAll();

const getById = (id: string): Promise<IUser> => usersRepo.getById(id);

const add = (user: IUser): Promise<IUser> => usersRepo.add(new User(user));

export { add, getAll, getById };
