import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import expressWinston from 'express-winston';
import config from '@/data/mongo-db-config';
import compression from 'compression';
import cors from 'cors';
import router from '@/routes';

const PORT = 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

app.use('/', router);

mongoose
  .connect(config.dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb started on connection: ', config.dbConnection);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Server startup failed', err);
  });
