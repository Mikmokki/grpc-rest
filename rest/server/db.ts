import { User, UserStatus } from '../types';

export const users: User[] = [
  {
    id: 1,
    name: 'Teddy',
    age: 25,
    status: UserStatus.BUSY,
    groupsList: ['car club'],
    avatar: undefined,
    verified: true,
  },
  {
    id: 2,
    name: 'Joss',
    age: 13,
    status: UserStatus.OFFLINE,
    groupsList: ['sewing club'],
    avatar: 'nice.jpg',
    verified: false,
  },
];
