import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { getArtist } from "../services/api_service"
import { toast } from "react-toastify"
import { icons } from "../utils/icons"
import { artistDetailsHC } from "../assets/dummy_data"
import SongItem from "../components/SongItem"
import PlaylistSection from "../components/PlaylistSection"
import ArtistCard from "../components/ArtistCard"
import { useSelector } from "react-redux"

const ArtistPage = () => {
    const { AiOutlineUserAdd, BsPlayFill } = icons
    const { name } = useParams()
    const [artist, setArtist] = useState(null)
    const ref = useRef()

    const fetchArtist = async () => {
        try {
            const response = await getArtist(name)
            if (response.err === 0) {
                setArtist(response.data)
            } else {
                toast.warn(response.msg)
            }
        } catch (error) {
            toast.warn(error);
        }
    }

    useEffect(() => {
        fetchArtist()
        ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, [name])

    return (
        <div className="flex flex-col w-full">
            <div ref={ref} className='h-[300px] relative'>
                <div className="absolute w-full h-full bg-no-repeat bg-cover bg-center blur-xl" style={{ backgroundImage: `url(${artist?.thumbnailM})` }}></div>
                <div className='px-10 absolute w-full h-full bg-[rgba(41,21,71,0.7)] text-white'>
                    <div className="absolute bottom-0 pb-6 flex gap-6">
                        <img src={artist?.thumbnail} className="h-32 w-32 rounded-full" />
                        <div>
                            <div className="flex items-center gap-8 mb-4">
                                <h1 className="text-6xl font-bold">{artist?.name}</h1>
                                <span className="p-2 text-main-500 hover:bg-main-200 cursor-pointer rounded-full bg-white">
                                    <BsPlayFill size={36} />
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-300">
                                    {(+artist?.totalFollow).toLocaleString()} người quan tâm
                                </span>
                                <button className="bg-main-500 text-white px-4 py-2 text-sm rounded-full flex items-center justify-center gap-1">
                                    <span><AiOutlineUserAdd /></span>
                                    <span className="text-xs">QUAN TÂM</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10 mt-12 flex">
                {
                    artist?.topAlbum &&
                    <div className="flex-auto w-[35%] pr-7">
                        <h3 className="mb-5 text-lg font-bold">Mới nhất</h3>
                        <div className="p-4 bg-[#C4CDCC] rounded-md flex gap-4">
                            <img src={artist?.topAlbum?.thumbnail} alt="thumbnail" className="object-cover w-36 h-36 rounded-md" />
                            <div className="flex flex-col text-xs text-black opacity-80 gap-3">
                                <span>{artist?.topAlbum?.textType}</span>
                                <div>
                                    <span className="text-sm font-bold opacity-100">{artist?.topAlbum?.title}</span>
                                    <span className="inline-block">{artist?.topAlbum?.artistsNames}</span>
                                </div>
                                <span>{artist?.topAlbum?.releaseDate}</span>
                            </div>
                        </div>
                    </div>
                }
                <div className="flex-auto w-[65%]">
                    <h3 className="mb-5 text-lg font-bold">Bài hát nổi bật</h3>
                    <div className="">
                        <div className="grid md:grid-cols-1 xl:grid-cols-2 w-full gap-x-8">
                            {
                                artist?.sections?.find(i => i.sectionType === "song")?.items?.slice(0, 6).map(item => {
                                    return (
                                        <div key={item?.encodeId} className="border-b border-gray-400">
                                            <SongItem song={item} imgSize="sm" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10">
                {
                    artist?.sections?.filter(i => i.sectionType === "playlist")?.map(playlists => {
                        return (
                            <PlaylistSection key={playlists?.title} playlists={playlists} />
                        )
                    })
                }
            </div>
            <div className="px-10 mt-12">
                <h3 className="text-lg font-bold mb-4">Có thể bạn sẽ thích</h3>
                <div className="flex gap-6 mb-7">
                    {
                        artist?.sections?.find(i => i.sectionType === "artist")?.items?.slice(0, 5).map(artist => {
                            return (
                                <ArtistCard artist={artist} key={artist?.id} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="px-10 mt-12">
                <h3 className="text-lg font-bold mb-5">Về {artist?.name}</h3>
                <div className="flex gap-8">
                    <div className="w-2/5 h-auto">
                        <img src={artist?.thumbnailM} className="flex-auto object-cover rounded-md" />
                    </div>
                    <div className="w-3/5 flex-auto flex flex-col gap-8 text-xs">
                        <p className="text-sm font-semibold text-gray-500" dangerouslySetInnerHTML={{ __html: artist?.biography || "No description" }}></p>
                        <div>
                            <span className="font-bold text-xl text-gray-700">{(+artist?.follow).toLocaleString()}</span>
                            <span className="block text-gray-500">người quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistPage