import { User, UserStatus } from '../proto/users_pb';
import { getUser, createUser, getUsersUnary, getUsersStream } from './functions';

const testUser = new User();
testUser.setName('Jaakko');
testUser.setAge(10);
testUser.setId(20);
testUser.setStatus(UserStatus.OFFLINE);
testUser.setGroupsList(['football club', 'computer science guild']);
testUser.setVerified(true);

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
  await testWrapper('getUsersStream', getUsersStream);
  await testWrapper('getUsersUnary', getUsersUnary);
  await testWrapper('getUser', () => getUser(1));
  await testWrapper('createUser', () => createUser(testUser));
};
runAllTests();
