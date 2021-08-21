import * as uuid from 'uuid';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

class User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  constructor({
    id = uuid.v4(),
    firstName = 'First',
    lastName = 'User',
    email = 'firstuser@test.com',
  } = {} as IUser) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export default User;
