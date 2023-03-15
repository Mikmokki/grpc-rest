import { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`http://localhost:5000/users`);
  return await res.json();
};

export const createUser = async (user: User): Promise<void> => {
  await fetch(`http://localhost:5000/users`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  return;
};
export const getUser = async (id: number) => {
  const res = await fetch(`http://localhost:5000/users/${id}`);
  return await res.json();
};
