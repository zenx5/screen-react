import fs from 'fs'
import http from 'http'
import { Router } from "express";

const router = Router()

router.get('/', (req, res) => res.json({message:'running'}))
router.post('/download-image', async (req, res) => {
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

router.get('/download-configuration', async (req, res) => {
    res.json({method:'get', route: 'download-configuration'})
})

router.post('/download-configuration', async (req, res) => {
    res.json({method:'post', route: 'download-configuration'})
})


export {
    router
}