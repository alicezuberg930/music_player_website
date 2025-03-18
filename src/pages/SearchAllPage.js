import { roundPeopleAmount } from '../utils/utils'
import SongItem from "../components/SongItem"
import SongCard from "../components/SongCard"
import PlaylistCard from "../components/PlaylistCard"
import ArtistCard from "../components/ArtistCard"
import { useSelector } from 'react-redux'

const SearchAllPage = () => {
    const { searchData } = useSelector(state => state.music)

    return (
        <div className="w-full">
            <div className="w-full">
                <h3 className="text-lg font-bold mb-4">Nổi bật</h3>
                <div className="flex gap-8 mb-7">
                    {searchData?.top &&
                        <div className="flex-1 p-2 flex gap-8 items-center bg-main-200 rounded-md">
                            <img src={searchData?.top?.thumbnail} className="w-20 h-20 object-cover rounded-full" alt="avatar" />
                            <div className="flex flex-col text-xs">
                                <span className="mb-1">{searchData?.top?.objectType === "artist" ? 'Nghệ sĩ' : ''}</span>
                                <span className="text-sm font-semibold">{searchData?.top?.title || searchData?.top?.name}</span>
                                {
                                    searchData.top.objectType === "artist" &&
                                    <span>{roundPeopleAmount(searchData?.artists[0]?.totalFollow)} quan tâm</span>
                                }
                            </div>
                        </div>
                    }
                    {
                        searchData?.songs?.slice(0, 2).map(song => {
                            return (
                                <div className="flex-1 h-full bg-main-200 rounded-md" key={song?.encodeId}>
                                    < SongItem song={song} imgSize="xl" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-lg font-bold mb-4">Bài hát</h3>
                <div className="grid grid-cols-2 gap-x-5 mb-7">
                    {
                        searchData?.songs?.slice(0, 6).map(song => {
                            return (
                                <SongCard key={song.encodeId} song={song} songs={searchData?.songs} playlistTitle="Kết quả tìm kiếm" hideAlbum={true} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-lg font-bold mb-4">Playlist/Album</h3>
                <div className="flex justify-start mb-7 -mx-3">
                    {
                        searchData?.playlists?.slice(0, 5).map((playlist) => {
                            return (
                                <PlaylistCard item={playlist} key={playlist?.encodeId} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-lg font-bold mb-4">Nghệ sĩ</h3>
                <div className="flex gap-6 mb-7">
                    {
                        searchData?.artists?.slice(0, 5).map((artist) => {
                            return (
                                <ArtistCard artist={artist} key={artist?.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchAllPage