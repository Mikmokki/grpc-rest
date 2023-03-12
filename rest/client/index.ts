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

const userList = [testUser, testUser, testUser, testUser, testUser];

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
    await createUser(testUser);
    requests++;
  }
  const endTime = (new Date().getTime() - startTime) / 1000;
  clearInterval(interval);
  console.log('Testing createOne:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
};
// const testCreateFive = () => {
//   const startTime = new Date().getTime();
//   let requests = 0;
//   const interval = setInterval(() => {
//     const time = (new Date().getTime() - startTime) / 1000;
//     console.log('Testing createFive:', 'time', time, 'requests', requests, 'requests/second', requests / time);
//   }, 1000);

//   while (new Date().getTime() - startTime <= 10000) {
//     const stream = client.createUser(() => {});
//     for (const user of userList5) {
//       stream.write(user);
//     }
//     stream.end();
//     requests++;
//   }
//   const endTime = (new Date().getTime() - startTime) / 1000;
//   clearInterval(interval);
//   console.log('Testing createFive:', 'time', endTime, 'requests', requests, 'requests/second', requests / endTime);
// };

const runAllTests = async () => {
  await testGetAll();
  await testGetOne();
  await testCreateOne();
  // testCreateFive();
};
runAllTests();
