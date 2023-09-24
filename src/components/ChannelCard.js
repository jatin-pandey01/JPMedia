import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetail,m=0}) => {
    console.log(channelDetail);
  return (
    <Box sx={{width:{md:'356px', xs:'320px'}, boxShadow:'none', borderRadius:0, mx:`${m!==0 ? 'auto': '8px' }`  , marginTop:-m }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' , textAlign:'center', color:'white'}} >
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    sx={{borderRadius:'50%', height:'180px', width:'180px',mb:2, border:'1px solid #e3e3e3'}} />
                <Typography variant='h6' >
                    {channelDetail?.snippet?.title}<CheckCircle sx={{fontSize:14, color:'gray', ml:'5px'}}/>
                </Typography>
                {
                    channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )
                }
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard;