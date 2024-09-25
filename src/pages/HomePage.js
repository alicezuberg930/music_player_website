import { useSelector } from "react-redux"
import HomeBannerSlider from "../components/HomeBannerSlider"
import PlaylistSection from "../components/PlaylistSection"
import NewReleaseList from "../components/NewReleaseList"
import { Link } from "react-router-dom"
import ChartSection from "../components/ChartSection"
import { favoriteArtistsHC, spotLightArtistsHC } from "../assets/dummy_data"
import ArtistCard from "../components/ArtistCard"

const HomePage = () => {
    const { playlistsList, weekCharts, favoriteArtists, spotLightArtists } = useSelector(state => state.app)

    return (
        <div className="px-10">
            <div className="h-16"></div>
            <HomeBannerSlider />
            {
                playlistsList?.map((playlists, i) => {
                    return (<PlaylistSection key={i} playlists={playlists} />)
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
                    <h3 className="text-xl font-bold">{(favoriteArtistsHC || favoriteArtists)?.title}</h3>
                    <span className="text-xs uppercase">Tất cả</span>
                </div>
                <div className="flex gap-3">
                    {
                        (favoriteArtistsHC || favoriteArtists).items?.slice(0, 5).map(singer => {
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
            <div className="flex items-center mt-12 gap-4">
                {
                    (spotLightArtistsHC || spotLightArtists).slice(0, 6).map(artist => {
                        return (
                            <ArtistCard artist={artist} key={artist.id} />
                        )
                    })
                }
            </div>
        </div >
    )
}
export default HomePage