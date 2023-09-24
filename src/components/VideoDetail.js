import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';
import Spinner from './Spinner';

const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail,setVideoDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  console.log(videoDetail); 

  useEffect(()=>{
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);



  if(!videoDetail?.snippet) return <Spinner />;
  return (
    <Box sx={{minHeight:'95vh'}}>
      <Stack direction={{sm:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px',}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='white' variant='h5' fontWeight='bold'>
              { videoDetail && videoDetail.snippet.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:'white', py:1,px:2}}>
              <Link to={`${videoDetail && `/channel/${videoDetail.snippet.channelId}`}`}>
                <Typography variant='h6' color={'white'}>
                  {videoDetail && videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{fontSize:'14px', ml:'5px', color:'gray'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {videoDetail &&  parseInt(videoDetail.statistics.viewCount).toLocaleString() } views
                </Typography>  
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {videoDetail &&  parseInt(videoDetail.statistics.likeCount).toLocaleString() } likes
                </Typography>  
              </Stack>
            </Stack>

          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;