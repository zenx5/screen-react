
import Carousel from 'react-material-ui-carousel'

import { useNavigate } from 'react-router-dom'
import ItemCarousel from '../components/ItemCarousel';



export default function Slider({ items }){
    const navigate = useNavigate();
    if( items.length === 0 ){
        navigate('/')
        console.log("rederigido por items")
    }

    

  

    return (
        <Carousel
            interval={localStorage.getItem('intervalSlider')||5000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover={false}
            className="my-carousel"
        >
            {
                items.map( (item, i) => <ItemCarousel key={item.id} src={item.source_url} /> )
            }
        </Carousel>
    )
}
