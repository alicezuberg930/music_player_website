import { useNavigate } from "react-router-dom"
import { icons } from "../utils/icons"
import { useState } from "react"
import { useSelector } from "react-redux"

const SearchBar = () => {
    const { GrClose, FiSearch } = icons
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')
    const { scrollTop } = useSelector(state => state.app)

    const handleSubmit = (e) => {
        if (e.code === "Enter" && e.target.value.length > 2) {
            navigate({ pathname: "search/all", search: "?q=" + e.target.value }, { state: { keyword: e.target.value } });
        }
    }

    return (
        <div className={`${scrollTop ? 'bg-[rgba(255,255,255,.08)] text-gray-200' : 'bg-[#DDE4E4] text-gray-500'} rounded-2xl flex items-center`}>
            <div className="flex w-full">
                <span className='pl-4 self-center'>
                    <FiSearch size={24} />
                </span>
                <input type="text" className='py-2 outline-none px-4 w-full bg-transparent'
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát" onKeyUp={(e) => handleSubmit(e)}
                    onChange={(e) => { setKeyword(e.target.value) }}
                    value={keyword}
                />
                <span className={`${keyword ? 'block' : 'hidden'} self-center pr-4`} onClick={() => setKeyword('')}>
                    <GrClose />
                </span>
            </div>
        </div >
    )
}

export default SearchBar