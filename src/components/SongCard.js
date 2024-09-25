import { memo } from "react"
import { icons } from "../utils/icons"
import { formatDuration } from "../utils/utils"
import { useDispatch, useSelector } from "react-redux"
import { addRecentSong, playPlaylist, setCurrentPlaylistName, setCurrentSongId, setPlay, setPlaylistSongs } from "../store/actions/music_actions"


const SongCard = ({ song, playlistTitle, songs, hideAlbum, order }) => {
    const dispatch = useDispatch()
    const { BsMusicNoteBeamed } = icons
    const orderCss = order === 1 ? 'text-shadow-1' : order === 2 ? 'text-shadow-2' : order === 3 ? 'text-shadow-3' : 'text-shadow-other'

    const handleSongClick = () => {
        dispatch(setPlaylistSongs(songs))
        dispatch(setCurrentPlaylistName(playlistTitle || 'no name'))
        dispatch(setCurrentSongId(song?.encodeId))
        dispatch(setPlay(true))
        dispatch(playPlaylist(true))
        dispatch(addRecentSong(song))
    }

    return (
        <div onClick={handleSongClick} className="flex justify-between items-center p-2 border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer">
            <div className="flex w-[45%] items-center justify-start gap-2">
                {
                    order &&
                    <div className={`w-1/12 flex justify-center text-3xl px-1 text-[#33104cf2] ${orderCss}`}>
                        {order}
                    </div>
                }
                {!order && <span><BsMusicNoteBeamed size={16} /></span>}
                <img src={song?.thumbnailM} alt="thumbnail" className="w-10 h-10 object-cover rounded-md" />
                <div className="flex flex-col whitespace-nowrap w-3/4">
                    <span className="font-semibold text-sm text-ellipsis overflow-hidden">{song?.title}</span>
                    <span className="text-xs text-ellipsis overflow-hidden">{song?.artistsNames}</span>
                </div>
            </div>
            {
                !hideAlbum &&
                <div className="flex w-[45%] justify-start font-semibold whitespace-nowrap text-xs text-gray-500">
                    <span className="text-ellipsis overflow-hidden">{song?.album?.title}</span>
                </div>
            }
            <div className="flex w-[10%] justify-end text-xs font-semibold opacity-70">
                {formatDuration(song?.duration)}
            </div>
        </div>
    )
}

export default memo(SongCard)