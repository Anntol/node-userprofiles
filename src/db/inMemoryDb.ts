import { IUser } from '../users/user.model.js';

type TableNames = 'Users';
type TableTypes = IUser | undefined;

type MemoryDb = {
  [key in TableNames]: TableTypes[]
};

const db: MemoryDb = {
  Users: [],
};

const getAllEntities = (tableName: TableNames): TableTypes[] => db[tableName];

const getEntity = (tableName: TableNames, id: string): TableTypes => {
  const entity = db[tableName].filter((item) => item?.id === id);
  if (!entity.length) {
    throw new Error(`Entity ${id} was not found`);
  }
  return entity[0];
};

const addEntity = (tableName: TableNames, entity: TableTypes): TableTypes => {
  if (!entity) return entity;
    
  db[tableName].push(entity);

  return getEntity(tableName, entity.id);    
};

export { addEntity, getAllEntities, getEntity };
