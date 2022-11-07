import { Paper } from '@mui/material'

export default function ItemCarousel(props){

    const { src } = props
    return(<Paper>
        <img style={{height:'100vh'}} alt="" src={src} />
    </Paper>
)
}