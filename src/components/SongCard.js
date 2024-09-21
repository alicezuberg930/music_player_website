import { memo } from "react"
import { icons } from "../utils/icons"
import { formatDuration } from "../utils/utils"
import { useDispatch } from "react-redux"
import { playPlaylist, setCurrentPlaylistName, setCurrentSongId, setPlay, setPlaylistSongs } from "../store/actions/get_music"


const SongCard = ({ song, playlistTitle, songs }) => {
    const dispatch = useDispatch()
    const { BsMusicNoteBeamed } = icons

    const handleSongClick = () => {
        dispatch(setPlaylistSongs(songs))
        dispatch(setCurrentPlaylistName(playlistTitle || 'no name'))
        dispatch(setCurrentSongId(song?.encodeId))
        dispatch(setPlay(true))
        dispatch(playPlaylist(true))
    }

    return (
        <div onClick={handleSongClick}
            className="flex justify-between items-center p-2 border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer">
            <div className="flex w-[45%] items-center justify-start gap-2">
                <span><BsMusicNoteBeamed size={16} /></span>
                <img src={song?.thumbnailM} alt="thumbnail" className="w-10 h-10 object-cover rounded-md" />
                <div className="flex flex-col whitespace-nowrap w-3/4">
                    <span className="font-semibold text-sm text-ellipsis overflow-hidden">{song?.title}</span>
                    <span className="text-xs text-ellipsis overflow-hidden">{song?.artistsNames}</span>
                </div>
            </div>
            <div className="flex w-[45%] justify-start font-semibold whitespace-nowrap text-xs text-gray-500">
                <span className="text-ellipsis overflow-hidden">{song?.album?.title || "No album"}</span>
            </div>
            <div className="flex w-[10%] justify-end text-xs font-semibold">
                {formatDuration(song?.duration)}
            </div>
        </div>
    )
}

export default memo(SongCard)