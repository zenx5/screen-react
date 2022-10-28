const express = require('express')
const morgan = require('morgan')
const { router } = require('./utils/routerServer')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( morgan('dev') );
app.use( router )

app.listen(5000, ()=>console.log('init'))

