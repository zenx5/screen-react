import { useState } from 'react'
import { LinearProgress, Box, FormControl, InputLabel, FormHelperText, Input } from "@mui/material"


export default function Config(){
    const [name, setName] = useState( localStorage.getItem('name')||'' )
    const [intervalSlider, setIntervalSlider] = useState( localStorage.getItem('intervalSlider')||5000 )
    const [intervalRefresh, setIntervalRefresh] = useState( localStorage.getItem('intervalRefresh')||10000 )
    const [userId, setUserId] = useState( localStorage.getItem('userId')||0 );
    
    const styleContainer = {
        position: 'relative',
        top: '30vh',
        width: '80%',
        left: '10%',
    }

    const styleForm = {
        margin: '5px',
    }

    const updateName = event => {
        let value = event.target.value
        localStorage.setItem('name', value )
        setName(value)
    }
    const updateIntervalDuration = event => {
        let value = event.target.value
        localStorage.setItem('intervalSlider', value )
        setIntervalSlider(value)
    }
    const updateIntervalRefresh = event => {
        let value = event.target.value
        localStorage.setItem('intervalRefresh', value )
        setIntervalRefresh(value)
    }
    const updateUserId = event => {
        let value = event.target.value
        localStorage.setItem('userId', value )
        setUserId(value)
    }

    return(
        <Box style={styleContainer}>
            
            <FormControl style={styleForm}>
                <InputLabel htmlFor="name">name</InputLabel>
                <Input id="name" aria-describedby="helper-text-name" onChange={updateName} value={name} />
                <FormHelperText id="helper-text-name">enter your name.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="id">id</InputLabel>
                <Input type="number" id="id" aria-describedby="helper-text-id" onChange={updateUserId} value={userId} />
                <FormHelperText id="helper-text-id">access id</FormHelperText>
            </FormControl>

            <FormControl style={styleForm}>
                <InputLabel htmlFor="duration" >default duration</InputLabel>
                <Input type="number" id="duration" aria-describedby="helper-text-duration" onChange={updateIntervalDuration} value={intervalSlider} />
                <FormHelperText id="helper-text-duration">interval by defaul that change the carousel.</FormHelperText>
            </FormControl>
            <FormControl style={styleForm}>
                <InputLabel htmlFor="refresh">refresh time</InputLabel>
                <Input type="number" id="refresh" aria-describedby="helper-text-refresh" onChange={updateIntervalRefresh} value={intervalRefresh} />
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