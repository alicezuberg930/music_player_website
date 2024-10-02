import { useSelector } from "react-redux"
import SongList from "../components/SongList"

const SearchSongPage = () => {
    const { searchSongs } = useSelector(state => state.music)

    return (
        <SongList songs={searchSongs} />
    )
}

export default SearchSongPage