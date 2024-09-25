import { useSelector } from "react-redux"
import PlaylistCard from "./PlaylistCard"

const PlaylistSection = ({ playlists }) => {
    const { screenWidth } = useSelector(state => state.app)
    const displayAmount = screenWidth <= 1024 ? 4 : 5
    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{playlists?.title}</h3>
                <span className="text-xs uppercase">Tất cả</span>
            </div>
            <div className="-mx-3 flex items-start justify-start">
                {
                    playlists?.items?.slice(0, displayAmount).map(item => {
                        return (
                            <PlaylistCard item={item} sectionId={playlists?.sectionId} key={item?.encodeId} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PlaylistSection