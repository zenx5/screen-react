import express from 'express'
import morgan from 'morgan';
import { router } from './utils/routerServer'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( morgan('dev') );
app.use( router )

app.listen(5000, ()=>console.log('init'))

