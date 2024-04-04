import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

interface VideoCardProps {
    title: string;
    thumbnailUrl: string;
    videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, videoId }) => {
    return (
        <Link href={`${videoId}`}>
            <Card sx={{ cursor: 'pointer', width: 345, '&:hover': { boxShadow: 8 } }}>
                <CardMedia
                    component="img"
                    image={thumbnailUrl}
                    alt={title}
                    sx={{
                        height: 230,
                        objectFit: 'cover', // 画像がコンテナに収まるように調整
                    }}
                />
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default VideoCard;
