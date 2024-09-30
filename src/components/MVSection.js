import { useSelector } from "react-redux"
import VideoCard from "./VideoCard"

const MVSection = ({ videos, thumbnail }) => {
    const { screenWidth } = useSelector(state => state.app)
    const displayAmount = screenWidth <= 1024 ? 2 : 3

    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{videos?.title}</h3>
                <span className="text-xs uppercase">Tất cả</span>
            </div>
            <div className="-mx-3 flex items-start justify-start">
                {
                    videos?.items?.slice(0, displayAmount).map(video => {
                        return (
                            <VideoCard video={video} key={video?.encodeId} thumbnail={thumbnail} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MVSection