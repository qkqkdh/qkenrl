import express, { urlencoded } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import api from './api';

import { API_PORT } from '../../constants';
class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.middleware();
    this.route();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({extended:true}));
    this.app.use(bodyParser.json());
    // TODO : DB CONFIG
  }

  private middleware() {
    // TODO : CORS
  }

  private route() {
    this.app.use('/api', api);
  }
}

const app = new App().app;

app.listen(API_PORT, () => { console.log(`LISTEN ON PORT ${API_PORT}`)});