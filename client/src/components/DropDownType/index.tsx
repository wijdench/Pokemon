import React, { useContext }         from 'react';
import Box                           from '@mui/material/Box';
import InputLabel                    from '@mui/material/InputLabel';
import MenuItem                      from '@mui/material/MenuItem';
import FormControl                   from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PokemonContext }            from '../../contexts/PokemonContext'
import { PokemonType }               from '../../model';

export type DropDownTypeProps = {
  type: string,
  handleTypeChange: (event: SelectChangeEvent) => void
}

export const DropDownType = ({ type, handleTypeChange }: DropDownTypeProps) => {
  const { pokemonTypes } = useContext(PokemonContext)
  
  return (
  <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pokemon type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Pokemon type"
          onChange={handleTypeChange}
        >
          {pokemonTypes.map((value: PokemonType, index: number) => <MenuItem key={index} value={value.typeName.english}>{value.typeName.english}</MenuItem>) }
        </Select>
      </FormControl>
    </Box>
  )
}
