import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import { sidebarMenu } from "../utils/menu"

const SidebarLeft = () => {
    const checkActive = (active) => {
        return `${active ? `text-[#0F7070] bg-main-100` : `text-[#32323D]`} text-sm py-2 px-[25px] font-bold flex gap-3 items-center justify-start`
    }

    return (
        <div className="h-full flex flex-col ">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col">
                {
                    sidebarMenu.map((value, index) => {
                        return (
                            <NavLink to={value.path} key={index}
                                className={({ isActive }) => checkActive(isActive)}
                            >
                                {value.icon}
                                <span>{value.text}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SidebarLeft