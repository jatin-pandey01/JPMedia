import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Spinner from './Spinner';

const Videos = ({videos,direction}) => {
  if(!videos) return <Box>Loadind</Box>
  return (
    <Stack direction={ direction || 'row'} flexWrap='wrap' justifyContent='start' >
      {
        videos.length > 0 ? (
          videos.map((video,index)=>{
            return <Box key={index}>
              {
                video.id.videoId && <VideoCard video={video} />
              }
              {
                video.id.channelId && <ChannelCard channelDetail={video} />
              }
            </Box>
          })
        ):(
          <Spinner/>
        )
      }
      
    </Stack>
  )
}

export default Videos;