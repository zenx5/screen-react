/*import https from 'https' // or 'https' for https:// URLs
import fs from 'fs'

export const downloadImage = (url, fileName) => {
    return new Promise( (resolve, reject)=>{
        const file = fs.createWriteStream( fileName );
        https.get(url, function(response) {
            response.pipe(file);
            // after download completed close filestream
            file.on("finish", () => {
                file.close();
                resolve(true)
            });
            file.on("error", reject(false) )
        });
    })

    
}
*/

import download from 'file-download'

export const downloadImage = (url, filename) => {
    return new Promise( (resolve, reject)=>{
        

        var options = {
            directory: "./",
            filename: filename
        }

        download(url, options, function(err){
            if (err) throw err
            console.log("meow")
        }) 
    })    
}
