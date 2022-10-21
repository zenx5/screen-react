import { useState } from 'react'
import { LinearProgress, Box } from "@mui/material"


export default function Load(){
    const [progress, setProgress] = useState(0)
    
    const styleContainer = {
        position: 'relative',
        top: '50vh',
        width: '80%',
        left: '10%',
    }

    
    
    return(
        <Box style={styleContainer}>
            <LinearProgress variant='determinate' value={progress}/>
        </Box>)
}