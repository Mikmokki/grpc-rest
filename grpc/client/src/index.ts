import { User, UserStatus } from '../proto/users_pb';
import { getUser, createUsers, getUsers, createUser } from './functions';

const testUser = new User();
testUser.setName('Jaakko');
testUser.setAge(10);
testUser.setId(20);
testUser.setStatus(UserStatus.OFFLINE);
testUser.setGroupsList(['football club', 'computer science guild']);
testUser.setVerified(true);
const userList5 = [testUser, testUser, testUser, testUser, testUser];
const userList1 = [testUser];

const testGetAll = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('Testing getAll:', 'time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 10000) {
    await getUsers();
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing getAll:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
const testGetOne = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('Testing getOne:', 'time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 10000) {
    await getUser(1);
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing getOne:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
const testCreateOne = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('Testing createOne:', 'time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 10000) {
    await createUsers(userList1);
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing createOne:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
const testCreateFive = async () => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('Testing createFive:', 'time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);

  while (new Date().getTime() - startTime <= 10000) {
    await createUsers(userList5);
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing createFive:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};

const runAllTests = async () => {
  await testGetAll();
  await testGetOne();
  await testCreateOne();
  await testCreateFive();
};
runAllTests();
