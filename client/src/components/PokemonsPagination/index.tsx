import React      from 'react';
import Pagination from '@mui/material/Pagination';

export type PokemonsPaginationProps = {
  totalRecords: number,
  page : number,
  pageSize: number,
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void,
}

export const PokemonsPagination = ({ totalRecords, page, pageSize, onChange }: PokemonsPaginationProps) => {
  const count = Math.floor(totalRecords / pageSize);
  return (
      <Pagination 
        count={count} 
        page={page} 
        onChange={onChange}
        variant="outlined" 
        shape="rounded" 
      />
  )
}