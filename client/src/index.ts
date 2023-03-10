import { User, UserStatus, UserRequest } from '../proto/users_pb';
import { UsersClient } from '../proto/users_grpc_pb';
import { credentials } from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
function allUsers() {
  return new Promise<User[]>((resolve, reject) => {
    const stream = client.getUsers(new Empty());
    const users: User[] = [];
    stream.on('data', (user) => users.push(user));
    stream.on('error', reject);
    stream.on('end', () => resolve(users));
  });
}

function createUsers(users: User[]) {
  const stream = client.createUser(noop);
  for (const user of users) {
    stream.write(user);
  }
  stream.end();
}

const port = 3000;
const client = new UsersClient(`localhost:${port}`, credentials.createInsecure());

const noop = () => {};

function getUsers(id: number) {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

async function run() {
  const user = await getUsers(1);
  // console.log(user.toString());

  const jim = new User();
  jim.setName('Jim');
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  jim.setGroupsList(['football club', 'computer science guild']);
  jim.setVerified(true);

  createUsers([jim]);
  // console.log(`\nCreated user ${jim}`);

  const users = await allUsers();
  // console.log(`\nListing all ${users.length} users`);
  // for (const user of users) {
  //   console.log(user.toString());
  // }
}
// run();
const test = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 10000) {
    await run();
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
test();
