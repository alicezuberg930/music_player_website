import { NavLink, Outlet, useLocation } from "react-router-dom"
import { searchMenu } from "../utils/menu"
import { useDispatch, useSelector } from "react-redux"
import { getSearchSongs, search } from "../store/actions/music_actions"
import { useEffect } from "react"

const SearchPage = () => {
    const normalStyle = "px-4 hover:text-main-500 font-semibold cursor-pointer h-full relative flex items-center"
    const activeStyle = " search-tab-item after:w-full"
    const location = useLocation()
    const dispatch = useDispatch()
    const { searchData } = useSelector(state => state.music)

    useEffect(() => {
        if (location.state?.keyword.length > 0) dispatch(search(location.state?.keyword))
    }, [location.state?.keyword])

    useEffect(() => {
        dispatch(getSearchSongs(searchData?.top?.id))
    }, [location.state?.keyword])

    return (
        <>
            <div className="flex h-12 mb-6 items-center text-sm border-b border-gray-400">
                <span className="text-2xl font-bold pr-4 border-r border-gray-400">Kết quả tìm kiếm</span>
                <div className="flex items-center h-full">
                    {
                        searchMenu.map(menu => {
                            return (
                                <NavLink key={menu.path} to={menu.path} className={({ isActive }) => isActive ? normalStyle + activeStyle : normalStyle}>
                                    {menu.text}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default SearchPage