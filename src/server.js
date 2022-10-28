const express = require('express')
const morgan = require('morgan')
// const { router } = require('./utils/routerServer')
const bodyParser = require('body-parser')
const http = require('http');
const fs = require('fs')
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( morgan('dev') );
// app.use( router );
app.use( cors({
    origin: ['http://localhost:3000']
}) );

app.get('/', (req, res) => res.json({message:'running'}))
app.post('/download-image', async (req, res) => {
    const { filename, url } = req.body
    await new Promise( (resolve, reject)=>{
        const file = fs.createWriteStream( `./downloads/${filename}` );
        http.get(url, function(response) {
            response.pipe(file);
            // after download completed close filestream
            file.on("finish", () => {
                file.close();
                res.json(true)
            });
            file.on("error", ()=>{
                res.json(false)
            } )
        });
    })
})

app.listen(5000, ()=>console.log('init'))

