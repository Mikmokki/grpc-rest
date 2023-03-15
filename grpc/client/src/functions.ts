import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { User, UserRequest } from '../proto/users_pb';
import { client } from './utils';

export const getUsersStream = () => {
  return new Promise<User[]>((resolve, reject) => {
    const stream = client.getUsersStream(new Empty());
    const users: User[] = [];
    stream.on('data', (user) => users.push(user));
    stream.on('error', reject);
    stream.on('end', () => resolve(users));
  });
};
export const getUsersUnary = () => {
  return new Promise<User[]>((resolve, reject) => {
    client.getUsersUnary(new Empty(), (err, response) => {
      if (err) reject(err);
      else resolve(response.getUsersList());
    });
  });
};

export const createUser = (user: User) => {
  return new Promise<Empty>((resolve, reject) => {
    client.createUser(user, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};

export const getUser = (id: number) => {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};
