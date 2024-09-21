import { Outlet } from "react-router-dom"
import SidebarLeft from "../components/SidebarLeft"
import SidebarRight from "../components/SidebarRight"
import Player from "../components/Player"
import Header from "../components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import Scrollbars from "react-custom-scrollbars-2"

const PublicPage = () => {
    const { showSideBarRight } = useSelector(state => state.app)
    return (
        <>
            <div className="w-full relative h-screen bg-main-300">
                <div className="w-full h-full flex">
                    <div className="w-[240px] h-full flex-none border">
                        <SidebarLeft />
                    </div>
                    <div className="flex-auto flex flex-col">
                        <div className="flex-none flex items-center px-10 h-16">
                            <Header />
                        </div>
                        <div className="flex-auto w-full overflow-y-scroll">
                            <Outlet />
                        </div>
                    </div>
                    {
                        showSideBarRight && <div className="animate-slide-left hidden 2xl:block w-[330px] flex-none">
                            <SidebarRight />
                        </div>
                    }
                </div>
                <div className="h-20 fixed bottom-0 left-0 right-0 z-20">
                    <Player />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PublicPage