
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'



export default function Slider({ items }){
    const navigate = useNavigate();
    if( items.length === 0 ){
        navigate('/')
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