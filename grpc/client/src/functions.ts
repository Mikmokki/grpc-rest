import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { User, UserRequest } from '../proto/users_pb';
import { client, noop } from './utils';
import * as grpc from 'grpc';

export const getUsers = () => {
  return new Promise<User[]>((resolve, reject) => {
    const stream = client.getUsers(new Empty());
    const users: User[] = [];
    stream.on('data', (user) => users.push(user));
    stream.on('error', reject);
    stream.on('end', () => resolve(users));
  });
};

export const createUsers = (users: User[]): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const stream = client.createUser((err, response) => {
      if (err) {
        reject(err);
        return;
      }
    });

    users.forEach((user) => {
      stream.write(user);
    });

    stream.end();

    stream.on('status', (status) => {
      if (status.code !== grpc.status.OK) {
        reject(new Error(`RPC failed with status code: ${status.code}`));
        return;
      }
      resolve();
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
