import { icons } from "../utils/icons"
import SearchBar from "./SearchBar"

const Header = () => {
    const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex my-2 gap-4 w-full">
                <div className="flex items-center text-gray-400 gap-6">
                    <HiArrowNarrowLeft size={24} />
                    <HiArrowNarrowRight size={24} />
                </div>
                <div className="w-1/2">
                    <SearchBar />
                </div>
            </div>
            <div>login</div>
        </div>
    )
}

export default Header