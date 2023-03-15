import { User, UserStatus } from '../types';
import { getUsers, createUser, getUser } from './apis';

const testUser: User = {
  name: 'Jaakko',
  age: 10,
  id: 20,
  status: UserStatus.AVAILABLE,
  groupsList: ['baseball group', 'ice hockey watchers'],
  verified: true,
};

const testWrapper = async (name: string, f: () => Promise<any>) => {
  console.log('Testing function', name);
  console.log('time: second', 'request count', 'request/second');

  let startTime = new Date().getTime();
  let requests = 0;
  while (new Date().getTime() - startTime <= 30000) {
    await f();
  }
  startTime = new Date().getTime();
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log(time, requests, requests / time);
  }, 5000);
  while (new Date().getTime() - startTime <= 100000) {
    await f();
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log(endTime, requests, requests / endTime);
  console.log('Testing function', name, 'ended');
};
const runAllTests = async () => {
  await testWrapper('GetUsers', getUsers);
  await testWrapper('GetUser', () => getUser(1));
  await testWrapper('CreateUser', () => createUser(testUser));
};
runAllTests();
