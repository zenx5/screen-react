import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { query } from './../utils'


export default function Load(){
    const [progress, setProgress] = useState(0);
    const [items, setItems] = useState([]);

    useEffect( () => {
        // query.getData('https://loto.kavavdigital.com/wp-json/wp/v2/media');

        fetch('https://loto.kavavdigital.com/wp-json/wp/v2/media')
            .then( response => response.json() )
            .then( json => {
                console.log(json);
                // saveData(json);
                setItems(json);
            } )
    }, [] );

    const saveData = datas => {
        const imgs = [];
        datas.forEach( data => {
            query.getImageData( data.source_url );
        });
    }
    
    const styleContainer = {
        position: 'relative',
        top: '50vh',
        width: '80%',
        left: '10%',
    }

    return (
        <Carousel
            // index={index}
            // onChange={handleChange}
            interval={5000}
            animation="slide"
             indicators={false}
             stopAutoPlayOnHover={false}
            // swipe
            className="my-carousel"
        >
            {
                items.map( (item, i) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img style={{height:'100vh'}} alt="" src={props.item.source_url} />
        </Paper>
    )
}