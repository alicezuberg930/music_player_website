import { memo } from "react"
import { roundPeopleAmount } from "../utils/utils"
import { icons } from "../utils/icons"
import { Link } from "react-router-dom"

const ArtistCard = ({ artist }) => {
    const { AiOutlineUserAdd } = icons

    return (
        <div className="flex flex-col items-center gap-3">
            <Link className="relative overflow-hidden rounded-full group" to={`/artist/${artist.alias}`}>
                <img src={artist.thumbnail} alt="artist" className="group-hover:animate-scale-up-center object-contain w-full" />
                <div className="absolute left-0 right-0 top-0 bottom-0 z-30 group-hover:bg-overlay"></div>
            </Link>
            <div className="flex flex-col items-center">
                <span className="text-sm font-medium hover:underline hover:text-main-500">{artist.name}</span>
                <span className="text-xs opacity-70">{roundPeopleAmount(artist.totalFollow) || 0} quan tâm</span>
            </div>
            <button className="bg-main-500 text-white px-4 py-2 text-sm rounded-full flex items-center justify-center gap-1">
                <span><AiOutlineUserAdd /></span>
                <span className="text-xs">QUAN TÂM</span>
            </button>
        </div>
    )
}

export default memo(ArtistCard)