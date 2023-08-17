import fs from 'fs';

import express, { Express, Request, Response } from 'express';
import { Trail } from 'types';

const app: Express = express();
const port = 8080;

const trails: Trail[] = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`).toString());

app.get('/api/v1/tours/:id', (req: Request, res: Response) => {
  const trail = trails.find((t) => t.id === parseInt(req.params.id, 10));
  res.status(200).json(trail);
});

app.get('/api/v1/tours', (req: Request, res: Response) => {
  res.status(200).json(trails);
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
