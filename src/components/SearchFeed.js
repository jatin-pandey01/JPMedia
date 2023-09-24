import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
      // console.log(selectedCategory);
      FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='800' color='white' mb={2}>
          Search Results for <span style={{color:'#F31503'}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;