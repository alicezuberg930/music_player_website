import { useNavigate } from "react-router-dom"
import { icons } from "../utils/icons"

const HomePlaylistSection = ({ playlists }) => {
    const { BsPlayFill, AiOutlineHeart, BsThreeDots } = icons
    const navigate = useNavigate()
    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{playlists?.title}</h3>
                <span className="text-xs uppercase">Tất cả</span>
            </div>
            <div className="flex items-start justify-between gap-5">
                {
                    playlists?.items?.slice(0, 5).map(item => {
                        let link = item?.link?.split('.')[0]
                        return (
                            <div onClick={() => navigate(link, { state: { playAlbum: false } })} key={item?.encodeId} className="text-sm flex flex-col gap-3 w-1/5 cursor-pointer">
                                <div className="relative w-full group overflow-hidden rounded-lg">
                                    <div className="text-white absolute top-0 bottom-0 left-0 right-0 gap-3 bg-overlay z-20 invisible group-hover:visible flex items-center justify-center">
                                        <span><AiOutlineHeart size={25} /></span>
                                        <span onClick={(e) => { e.stopPropagation(); navigate(link, { state: { playAlbum: true } }) }}
                                            className="p-1 border border-white rounded-full"
                                        >
                                            <BsPlayFill size={35} />
                                        </span>
                                        <span><BsThreeDots size={25} /></span>
                                    </div>
                                    <img src={item?.thumbnailM} alt={item?.encodeId} className="w-full z-10 group-hover:animate-scale-up-center object-contain" />
                                </div>
                                <div>
                                    <span className="font-semibold line-clamp-1">{item?.title}</span>
                                    <span className="line-clamp-2">{playlists.sectionId === "h100" ? item?.artistsNames : item?.sortDescription}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HomePlaylistSection