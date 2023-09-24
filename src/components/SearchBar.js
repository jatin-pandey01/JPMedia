import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const navigate = useNavigate();
  return (
    <Paper component='form' onSubmit={(e)=>{e.preventDefault(); searchTerm && navigate(`/search/${searchTerm}`) }} sx={{borderRadius:20, border:'1px solid #e3e3e3', paddingLeft:2, marginRight:{sx:'50', md:'0'}}}>
        <input className='search-bar' type='text' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <IconButton type='submit' sx={{padding:'10px'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;