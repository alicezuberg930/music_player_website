import { memo } from "react"
import { useDispatch } from "react-redux"
import { setCurrentSongId, setPlay } from "../store/actions/get_music"

const SongItem = ({ song, order, percent, imgSize, style, showTime }) => {
    const dispatch = useDispatch()

    return (
        <div className={`${style || 'text-black hover:bg-main-200'} w-full p-2 h-auto rounded-md cursor-pointer`}
            onClick={() => {
                dispatch(setCurrentSongId(song.encodeId))
                dispatch(setPlay(true))
            }}
        >
            <div className="h-full flex justify-start items-center gap-2">
                {order &&
                    <span className={`text-3xl px-1 text-[#33104cf2] ${order === 1 ? 'text-shadow-1' : order === 2 ? 'text-shadow-2' : 'text-shadow-3'}`}>
                        {order}
                    </span>
                }
                <img src={song?.thumbnail} alt={song?.encodeId} className={`${imgSize === 'lg' ? 'w-14 h-14' : 'w-10 h-10'} object-cover rounded-md`} />
                <div className="flex flex-col flex-auto">
                    <span className="text-sm font-semibold line-clamp-1">{song?.title}</span>
                    <span className="text-xs opacity-70 line-clamp-1">{song?.artistsNames}</span>
                    {(showTime) && <span className="text-xs opacity-70">{"2 giờ trước"}</span>}
                </div>
                {percent && <span className="pr-1 font-bold">{percent}%</span>}
            </div>
        </div>
    )
}

export default memo(SongItem)