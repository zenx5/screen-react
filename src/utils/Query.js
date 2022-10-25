import axios from "axios";

export const getData = ( url ) => {
    axios.get(url)
        .then( data => {
            console.log(data.data)
            console.log('success')
        })
        .catch( error => {
            console.log(error)
        })
}

export const getImageData = ( url ) => {
    axios.get(url)
        .then( data => {
            console.log(data)
            console.log('success')
        })
        .catch( error => {
            console.log(error)
        })
}
