import express from 'express';
import { helloWorld as helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3333);