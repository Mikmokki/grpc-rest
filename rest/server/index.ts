import express, { Express, Request, Response } from 'express';
import { UserStatus } from '../types';
import { users } from './db';
const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/users', (_req: Request, res: Response) => {
  res.send(users);
});
app.post('/users', (req: Request, res: Response) => {
  req.body;
  return res.status(201).send();
});
const user = {
  id: 1,
  name: 'Teddy',
  age: 25,
  status: UserStatus.BUSY,
  groupsList: ['car club'],
  avatar: undefined,
  verified: true,
};
app.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(user);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
