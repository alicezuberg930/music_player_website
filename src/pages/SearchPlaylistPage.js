import { useEffect, useState } from "react"
import { getArtist } from "../services/api_service"
import { useSelector } from "react-redux"
import PlaylistCard from "../components/PlaylistCard"
import { toast } from "react-toastify"

const SearchPlaylistPage = () => {
    const [playlists, setPlaylists] = useState([])
    const { searchData } = useSelector(state => state.music)

    const fetchPlaylist = async () => {
        try {
            let tempPlaylists = []
            let response = await getArtist(searchData?.top?.alias)
            if (response.err === 0) {
                response?.data?.sections?.map(section => {
                    if (section?.sectionType === "playlist") tempPlaylists = [...tempPlaylists, ...section?.items]
                })
                setPlaylists(tempPlaylists)
            } else {
                toast.warn(response.msg)
            }
        } catch (error) {
            toast.warn(error)
        }
    }

    useEffect(() => {
        fetchPlaylist()
    }, [])

    return (
        <div className="mt-7">
            {/* <div className="flex items-center justify-between mb-5"> */}
            <h3 className="text-xl font-bold mb-4">Playlist/album</h3>
            {/* <span className="text-xs uppercase">Tất cả</span> */}
            {/* </div> */}
            <div className="flex flex-wrap -mx-2">
                {
                    playlists && playlists?.map(playlist => {
                        return (
                            <PlaylistCard item={playlist} key={playlists?.id} sectionId="h100" isSearch={true} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchPlaylistPage