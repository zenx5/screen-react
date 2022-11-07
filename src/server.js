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
app.use( cors( ));


function deleteFolder(path) {
    let files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

app.get('/', async (req, res) => {
    const filename = req.param('filename');
    const url = req.param('url').replace('https','http');

    await new Promise( (resolve, reject)=>{
        const file = fs.createWriteStream( `./public/downloads/${filename}.png` );
        http.get(url, function(response) {
            response.pipe(file);
            // after download completed close filestream
            file.on("finish", () => {
                file.close();
                res.json(true);
            });
            file.on("error", ()=>{
                res.json(false)
            } )
        });
    })
})
app.get('/delete', async (req, res) => {
    const folder = './public/downloads';
    deleteFolder(folder);
    fs.mkdirSync(folder);

    res.json(true);
})
app.get('/getImagesCount', async (req, res) => {
    const folder = './public/downloads';
    let files = [];
    if( fs.existsSync(folder) ) {
        files = fs.readdirSync(folder);
        const data = files.map( (file, index) => {
            return {
                src: './downloads/'+file,
                id: index
            }
        })
        return res.json( data )
    }

    res.json([]);
})


app.listen(5000, ()=>console.log('init'))

