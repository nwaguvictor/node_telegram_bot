import express from 'express';
import { createServer } from 'http';
import { PORT, db, MONGO_URI } from './config';
import { errorMiddleware } from './middlewares';
import { routes } from './routes';
import { CustomError } from './utils';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  return res.status(200).json({ message: 'We are onboard!' });
});

app.use('/api', routes);

app.all('*', (req, res, next) => {
  return next(new CustomError('Endpoint not found, please make sure you are hitting the right endpoint', 404));
});

app.use(errorMiddleware);

const server = createServer(app);

server.listen(PORT, async () => {
  console.log(`Application serving on ${PORT}`);
  await db(MONGO_URI);
});
