import { useSelector } from "react-redux"
import HomeBannerSlider from "../components/HomeBannerSlider"
import HomePlaylistSection from "../components/HomePlaylistSection"
import NewReleaseList from "../components/NewReleaseList"
import { Link } from "react-router-dom"
import favoriteArtistsJson from '../assets/favorite_artists.json'
import ChartSection from "../components/ChartSection"

const HomePage = () => {
    const { playlistsList, weekCharts, favoriteArtists } = useSelector(state => state.app)
    return (
        <div className="px-10">
            <HomeBannerSlider />
            {
                playlistsList?.map((playlists, i) => {
                    return (<HomePlaylistSection key={i} playlists={playlists} />)
                })
            }
            <NewReleaseList />
            <ChartSection />
            <div className="flex items-center w-full mt-12 gap-7">
                {
                    weekCharts?.map(chart => {
                        return (
                            <Link to={chart?.link?.split('.')[0]} key={chart?.link} className="flex-1">
                                <img src={chart?.cover} alt="cover" className="w-full object-cover rounded-md" />
                            </Link>
                        )
                    })
                }
            </div>
            <div className="mt-12 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{(favoriteArtistsJson || favoriteArtists)?.title}</h3>
                    <span className="text-xs uppercase">Tất cả</span>
                </div>
                <div className="flex gap-3">
                    {
                        (favoriteArtistsJson || favoriteArtists).items?.slice(0, 5).map(singer => {
                            return (
                                <Link key={singer?.encodeId} className="flex-1 relative h-80">
                                    <img src={singer?.thumbnail} alt={singer?.encodeId} className="w-full h-full object-cover rounded-md" />
                                    <div className="absolute w-full flex justify-evenly bottom-[5%]">
                                        <img src={singer?.song?.items[0]?.thumbnail} alt="song" className="w-1/4 rounded-md object-cover" />
                                        <img src={singer?.song?.items[1]?.thumbnail} alt="song" className="w-1/4 rounded-md object-cover" />
                                        <img src={singer?.song?.items[2]?.thumbnail} alt="song" className="w-1/4 rounded-md object-cover" />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="h-24"></div>
        </div >
    )
}
export default HomePage