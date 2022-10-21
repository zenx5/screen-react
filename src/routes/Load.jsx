import { useState, useEffect } from 'react'
import { LinearProgress, Box } from "@mui/material"
import { useSelector } from 'react-redux'

import { getConfig } from '../api/config'

export default function Load(){
    const [progress, setProgress] = useState(0)
    const routes = useSelector(state => state.routes)
    const configuration = useSelector(state => state.configuration)

    const getData = async () => {

        await getConfig()        
    }
    
    const styleContainer = {
        position: 'relative',
        top: '50vh',
        width: '80%',
        left: '10%',
    }

    
    
    return(
        <Box style={styleContainer}>
            <LinearProgress variant='determinate' value={progress}/>
        </Box>
    )
}