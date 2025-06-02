interface VideoCardProps {
    title: string;
    thumb: string;
    photo: string;
    channelName: string;
    views: string;
    timestamp: string;
}

export function VideoCard({ title, thumb, photo, channelName, views, timestamp }: VideoCardProps) {
    return (
        <div className="cursor-pointer group">
            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    src={photo} alt={title} />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">12:34</div>
            </div>

            <div className="flex mt-3 gap-3">
                <div className="flex-shrink-0">
                    <img className="w-9 h-9 rounded-full object-cover"
                        src={thumb} alt={channelName} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2 leading-5 mb-1 group-hover:text-blue-600">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">{channelName}</p>
                    <p className="text-sm text-gray-600">{views} • {timestamp}</p>

                </div>
            </div>
        </div>
    );
}