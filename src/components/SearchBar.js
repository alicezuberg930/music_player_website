import { icons } from "../utils/icons"

const SearchBar = () => {
    const { FiSearch } = icons

    return (
        <div className="flex items-center">
            <span className="text-gray-500 h-10 pl-4 flex justify-center items-center bg-[#DDE4E4] rounded-l-2xl">
                <FiSearch size={20} />
            </span>
            <input type="text" className="h-10 outline-none px-4 py-2 w-full rounded-r-2xl bg-[#DDE4E4] text-gray-500"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát"
            />
        </div>
    )
}

export default SearchBar