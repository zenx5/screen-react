
import Carousel from 'react-material-ui-carousel'

import { useNavigate } from 'react-router-dom'
import ItemCarousel from '../components/ItemCarousel';



export default function Slider({ items }){

    return (
        <Carousel
            interval={localStorage.getItem('intervalSlider')||5000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover={false}
            className="my-carousel"
        >
            {
                items.map( (item, i) => <ItemCarousel key={item.src} src={item.src} /> )
            }
        </Carousel>
    )
}
