import { Container, Box, Typography } from '@mui/material';
import VideoCard from '../components/VideoCard';

const videos = [
  {
    id: 1,
    title: '短縮URL / URL shortner',
    thumbnailUrl: '/assets/1.jpg',
    videoId: 'https://synapse.gynga.org/',
  },
  {
    id: 2,
    title: 'URLエンコーダー / デコーダー',
    thumbnailUrl: '/assets/2.jpg',
    videoId: 'https://utils.gynga.org/',
  },
];

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gateway
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
          {videos.map((video) => (
            <VideoCard key={video.id} title={video.title} thumbnailUrl={video.thumbnailUrl} videoId={video.videoId} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;