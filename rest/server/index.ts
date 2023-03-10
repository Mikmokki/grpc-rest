import express, { Express, Request, Response } from 'express';
import { users } from './db';
const app: Express = express();
const port = 5000;

app.get('/users', (req: Request, res: Response) => {
  console.log(`/users: sending all users.`);

  res.send(users);
});
// app.post('/users', (req: Request, res: Response) => {
//   req.body();
//   console.log(`createUsers: creating new users from stream.`);
//   let userCount = 0;

//   call.on('data', (u) => {
//     userCount++;
//     users.push(u);
//   });

//   call.on('end', () => {
//     console.log(`Created ${userCount} new user(s).`);
//     callback(null, new Empty());
//   });
//   res.send(users);
// });
app.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === Number(userId));
  if (!user) {
    return res.status(400).send(`User with ID ${userId} does not exist.`);
  }
  console.log(`getUser: returning ${user.name} (id: ${user.id}).`);
  res.send(users.find((user) => Number(req.params.id) === user.id));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
