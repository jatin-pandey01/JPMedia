import React, { useEffect, useState } from 'react';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { Box, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FetchFromAPI } from '../utils/FetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState([]);
  const [videos,setVideos] = useState([]);
  const {id} = useParams(); //'/channel/:id', so here it'll be that id
  // console.log(id);
  console.log(channelDetail);
  // console.log(videos);

  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id]);
  return (
    <Box minHeight='95vh' >
      <Box>
        <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl} style={{width:'100%', height:'300px'}} />
        <ChannelCard channelDetail={channelDetail} m={15} />
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{mx:{sm:'100px'}}} />
          <Videos videos={videos} />
        {/* </Box> */}

      </Box>
    </Box>
  )
}

export default ChannelDetail;