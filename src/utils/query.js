import axios from "axios";

function getData( url ) {
    axios.get(url)
        .then( data => {
            console.log(data.data)
            console.log('success')
        })
        .catch( error => {
            console.log(error)
        })
}

function getImageData( url ) {
    axios.get(url)
        .then( data => {
            console.log(data)
            console.log('success')
        })
        .catch( error => {
            console.log(error)
        })
}

const query = {
    getData,
}

export default query;
