import { Outlet, useLocation } from "react-router-dom"
import SidebarLeft from "../components/SidebarLeft"
import SidebarRight from "../components/SidebarRight"
import Player from "../components/Player"
import Header from "../components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { isScrollTop } from "../store/actions/home_actions"

const PublicPage = () => {
    const { showSideBarRight, scrollTop } = useSelector(state => state.app)
    const { currentSongId } = useSelector(state => state.music)
    const location = useLocation();
    const dispatch = useDispatch()

    const handleScrollTop = (e) => {
        if (location.pathname.includes("/artist") || location.pathname.includes("/zing-chart")) {
            if (e.target.scrollTop === 0) dispatch(isScrollTop(true))
            else dispatch(isScrollTop(false))
        } else {
            dispatch(isScrollTop(false))
        }
    }

    return (
        <>
            <div className="w-full h-screen bg-main-300 overflow-hidden">
                <div className="w-full h-full flex">
                    <SidebarLeft />
                    <div className="flex-1 flex flex-col relative">
                        <div className={`flex-none px-10 w-full z-50 bg-transparent ${scrollTop ? 'bg-transparent' : 'bg-main-300'}`}>
                            <Header />
                        </div>
                        <div className="flex-auto overflow-y-scroll overflow-x-hidden py-8 px-2 md:px-6" onScroll={handleScrollTop}>
                            <Outlet />
                        </div>
                        {currentSongId && <Player />}
                    </div>
                    {showSideBarRight && <SidebarRight />}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PublicPage