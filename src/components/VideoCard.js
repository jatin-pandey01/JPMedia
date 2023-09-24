import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
    const videoId = video.id.videoId;
    const snippet = video.snippet;
    // console.log(videoId,snippet);
  return (
    <Card sx={{width:{md:'356px', xs:'320px'}, boxShadow:'none', borderRadius:0, mr:2, mb:2 }}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet.title} 
                    sx={{height: '180px', width:'358px'}}/>
        </Link>

        <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
            <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color={'white'}> {snippet?.title.slice(0,60)|| demoChannelTitle.slice(0,60)} ... </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color={'gray'}> {snippet?.channelTitle || demoChannelTitle} <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/> </Typography>
                
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard;