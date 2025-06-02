import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    id: 1,
    photo: "photo.png",
    thumb: "photo.png",
    title: "Chandrayan 4 Lauch Live | 2028",
    channelName: "ISRO",
    views: "100M views",
    timestamp: "1 days ago"
}, {
    id: 2,
    photo: "photo.png",
    thumb: "photo.png",
    title: "Chandrayan 5 Lauch Live | 2030",
    channelName: "ISRO",
    views: "100M views",
    timestamp: "1 days ago"
}, {
    id: 3,
    photo: "photo.png",
    thumb: "photo.png",
    title: "Chandrayan 6 Lauch Live | 2035",
    channelName: "ISRO",
    views: "100M views",
    timestamp: "1 days ago"
},
{
    id: 4,
    photo: "photo.png",
    thumb: "photo.png",
    title: "Chandrayan 6 Lauch Live | 2035",
    channelName: "ISRO",
    views: "100M views",
    timestamp: "1 days ago"
},
{
    id: 5,
    photo: "photo.png",
    thumb: "photo.png",
    title: "This is a very long video title asdasdasadasdadasdasdadasdadsasdada that would normally wrap to multiple lines",
    channelName: "ISRO",
    views: "100M views",
    timestamp: "1 days ago"
}
];

export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {VIDEOS.map(video => <div key={video.id}>
                <VideoCard
                    photo={video.photo}
                    thumb={video.thumb}
                    title={video.title}
                    channelName={video.channelName}
                    views={video.views}
                    timestamp={video.timestamp}
                />
            </div>)}
        </div>
    );
}
