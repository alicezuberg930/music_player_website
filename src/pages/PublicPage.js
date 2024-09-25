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
                    <div className="md:w-[240px] w-[70px] flex-none border bg-main-200">
                        <SidebarLeft />
                    </div>
                    <div className="flex-auto flex flex-col relative">
                        <div className={`flex items-center px-10 h-16 absolute w-full z-50 ${scrollTop ? 'bg-transparent' : 'bg-main-300'}`}>
                            <Header />
                        </div>
                        <div className="flex-auto w-full h-full overflow-y-scroll" onScroll={handleScrollTop}>
                            <Outlet />
                        </div>
                        <div className="h-20"></div>
                    </div>
                    {
                        showSideBarRight &&
                        <div className="animate-slide-left hidden 2xl:block w-[330px] flex-none border-l">
                            <SidebarRight />
                        </div>
                    }
                </div>
                {
                    currentSongId &&
                    <div className="h-20 fixed bottom-0 left-0 right-0 z-20">
                        <Player />
                    </div>
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default PublicPage