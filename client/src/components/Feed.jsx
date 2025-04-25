import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Feed() {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('http://localhost:5001/get-videos')
            const data = await response.data;
            setVideos(data)
        }
        fetch()
    }, [])

    return (
        <div className="flex justify-center items-start flex-wrap p-4 bg-gray-900 min-h-screen">
            { videos && videos.map((video) => (
                <div className="w-[320px] m-4 cursor-pointer group" key={video.id.videoId}>
                    <div className="relative overflow-hidden rounded-xl">
                        <img 
                            src={video.snippet.thumbnails.default.url} 
                            alt="" 
                            className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute bottom-0 right-0 bg-black bg-opacity-80 text-white text-xs px-2 py-1 m-2 rounded">
                            10:30
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-white font-medium line-clamp-2 hover:text-blue-400 transition-colors">
                            {video.snippet.title}
                        </h3>
                        <div className="flex items-center mt-2 text-gray-400 text-sm">
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                                    <img src="/UI/mainadmin.jpg" alt="" className="w-full h-full object-cover" />
                                </div>
                                <span className="hover:text-white transition-colors">{video.snippet.channelTitle}</span>
                            </div>
                            <div className="flex items-center ml-4">
                                <span>1.3K views</span>
                                <span className="mx-1">•</span>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    )
}



// {
//     "kind": "youtube#searchResult",
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "fTV4xHSwaF8"
//     },
//     "snippet": {
//         "publishedAt": "2025-02-25T00:00:00Z",
//         "channelId": "UCNWwmZ74lxx2ZKGY8SaPsLg",
//         "title": "Maroon 5 Best Songs Playlist 2025 | The Best Of Maroon 5 | Greatest Hits Full Album 2025 Lyrics",
//         "description": "",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             }
//         },
//         "channelTitle": "Music Top Hits",
//         "liveBroadcastContent": "none",
//         "publishTime": "2025-02-25T00:00:00Z"
//     }
// }