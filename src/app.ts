// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------

import 'dotenv/config';
import { resolve } from 'node:path';
import type { Express } from 'express';
import express from 'express';

import usersRouter from './routes/users';

/* CONFIG. ------------------------------------------------------------------ */

const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

app.use(express.static(resolve(__dirname, '../public')));
app.use(express.json());

/* Routing ------------------------------------------------------------------ */

app.use('/api/users', usersRouter);

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
