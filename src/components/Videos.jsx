import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  // Check if videos is null or not an array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}> 
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>  
  );
}

export default Videos;
