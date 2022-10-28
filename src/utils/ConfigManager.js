import https from 'https'
import fs from 'fs'

export const downloadImage = (url, fileName) => {
    return new Promise( (resolve, reject)=>{
        const file = fs.createWriteStream( 'config.json' );
        https.get(url, function(response) {
            response.pipe(file);
            
            file.on("finish", () => {
                file.close();
                resolve(true)
            });
            file.on("error", reject(false) )
        });
    })

    
}
