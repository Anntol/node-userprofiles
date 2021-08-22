import * as uuid from 'uuid';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

class User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  photoUrl: string;

  constructor({
    id = uuid.v4(),
    firstName = 'First',
    lastName = 'User',
    email = 'firstuser@test.com',
    photoUrl = '',
  } = {} as IUser) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.photoUrl = photoUrl;
  }
}

export default User;
