import { useState } from 'react'
import { LinearProgress, Box, FormControl, InputLabel, FormHelperText, Input } from "@mui/material"


export default function Config(){
    const [progress, setProgress] = useState(0)
    
    const styleContainer = {
        position: 'relative',
        top: '30vh',
        width: '80%',
        left: '10%',
    }

    const styleForm = {
        margin: '5px',
    }

    const updateIntervalDuration = _ => {
        
    }
    const updateIntervalRefresh = _ => {}

    return(
        <Box style={styleContainer}>
            
            <FormControl style={styleForm}>
                <InputLabel htmlFor="name">name</InputLabel>
                <Input id="name" aria-describedby="helper-text-name" />
                <FormHelperText id="helper-text-name">enter your name.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="token">token</InputLabel>
                <Input id="token" aria-describedby="helper-text-token" />
                <FormHelperText id="helper-text-token">access token</FormHelperText>
            </FormControl>

            <FormControl style={styleForm}>
                <InputLabel htmlFor="duration" onChange={updateIntervalDuration}>default duration</InputLabel>
                <Input type="number" id="duration" aria-describedby="helper-text-duration" />
                <FormHelperText id="helper-text-duration">interval by defaul that change the carousel.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="refresh" onChange={updateIntervalRefresh}>refresh time</InputLabel>
                <Input type="number" id="refresh" aria-describedby="helper-text-refresh" />
                <FormHelperText id="helper-text-refresh">interval time for update the data.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="number">timeIn</InputLabel>
                <Input type="number" id="number" aria-describedby="my-helper-number" />
                <FormHelperText id="my-helper-number">We'll never share your number.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="number">timeOut</InputLabel>
                <Input type="number" id="number" aria-describedby="my-helper-number" />
                <FormHelperText id="my-helper-number">We'll never share your number.</FormHelperText>
            </FormControl>
            
        </Box>
    )
}