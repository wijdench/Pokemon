import React, { useState }   from 'react'
import Grid                  from '@mui/material/Grid'
import { SelectChangeEvent } from '@mui/material/Select'
import { DropDownType }      from '../../components/DropDownType'
import { PokemonsList }      from '../../components/PokemonsList'
import { Paper }             from '@mui/material'

export const Home = () => {
    const [type, setType] = useState('')

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    }

    return (
        <Paper sx={{ width:'100%', padding:'2px'}}> 
            <Grid container spacing={2} justifyContent="center">
                <Grid item container justifyContent="center" xs={12}>
                    <DropDownType type={type} handleTypeChange={handleTypeChange}/>
                </Grid>
                <Grid item xs={12}>
                    <PokemonsList type={type} />
                </Grid>
            </Grid>
        </Paper>
    )
}