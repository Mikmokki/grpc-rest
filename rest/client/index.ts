import { User, UserStatus } from '../types';
import { getUsers, createUsers, getUser } from './apis';

const testUser: User = {
  name: 'Jaakko',
  age: 10,
  id: 20,
  status: UserStatus.AVAILABLE,
  groupsList: ['baseball group', 'ice hockey watchers'],
  verified: true,
};
const userList5 = [testUser, testUser, testUser, testUser, testUser];
const userList1 = [testUser];

const testWrapper = async (name: string, f: () => Promise<any>) => {
  const startTime = new Date().getTime();
  let requests = 0;
  const interval = setInterval(() => {
    const time = (new Date().getTime() - startTime) / 1000;
    console.log('Testing', name, 'time', time, 'requests', requests, 'requests/second', requests / time);
  }, 1000);
  while (new Date().getTime() - startTime <= 10000) {
    await f();
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing', name, 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
const runAllTests = async () => {
  await testWrapper('GetAll', getUsers);
  await testWrapper('GetOne', () => getUser(1));
  await testWrapper('CreateOne', () => createUsers(userList1));
  await testWrapper('CreateFive', () => createUsers(userList5));
};
runAllTests();
