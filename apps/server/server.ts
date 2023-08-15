import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Express + TypeScript Server 111' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
