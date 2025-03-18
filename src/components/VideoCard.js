import { useNavigate } from "react-router-dom";
import { icons } from "../utils/icons";

const VideoCard = ({ video, thumbnail }) => {
    const navigate = useNavigate()
    const { BsPlayFill } = icons
    const link = video.link.split('.')[0]

    return (
        <div className="text-sm flex flex-col w-full gap-3 cursor-pointer px-3">
            <div className="relative w-full group overflow-hidden rounded-lg">
                <div className="text-white absolute top-0 bottom-0 left-0 right-0 gap-3 bg-overlay z-20 invisible group-hover:visible flex items-center justify-center">
                    <span onClick={(e) => { e.stopPropagation(); navigate(link) }}
                        className="p-1 border border-white rounded-full"
                    >
                        <BsPlayFill size={35} />
                    </span>
                </div>
                <img src={video?.thumbnailM} alt={video?.encodeId} className="w-full z-10 group-hover:animate-scale-up-center object-contain" />
            </div>
            <div className="flex gap-3">
                <img src={thumbnail} className="h-10 w-10 rounded-full" />
                <div>
                    <span className="font-semibold line-clamp-1">{video?.title}</span>
                    <span className="line-clamp-2 text-gray-500">{video?.artistsNames}</span>
                </div>
            </div>
        </div >
    )
}

export default VideoCard