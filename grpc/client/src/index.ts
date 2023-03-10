import { User, UserStatus, UserRequest } from '../proto/users_pb';
import { UsersClient } from '../proto/users_grpc_pb';
import { credentials } from 'grpc';
import { allUsers } from './all-users';
import { createUsers } from './create-users';

const port = 3000;
const client = new UsersClient(`localhost:${port}`, credentials.createInsecure());

const getUsers = (id: number) => {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};
const jim = new User();
jim.setName('Jim');
jim.setAge(10);
jim.setId(20);
jim.setStatus(UserStatus.OFFLINE);
jim.setGroupsList(['football club', 'computer science guild']);
jim.setVerified(true);
const userList = [jim, jim, jim, jim, jim];
const run = async () => {
  const user = await getUsers(1);
  // console.log(user.toString());

  createUsers(userList);
  // console.log(`\nCreated user ${jim}`);

  const users = await allUsers();
  // console.log(`\nListing all ${users.length} users`);
  // for (const user of users) {
  //   console.log(user.toString());
  // }
};
// run();
const test = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 100000) {
    await run();
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
test();
