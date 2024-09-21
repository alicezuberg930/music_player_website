import { paths } from "./global_paths"
import { icons } from "./icons"
const { MdOutlineFeed, MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie } = icons

export const sidebarMenu = [
    {
        path: paths.MY_MUSIC,
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: paths.HOME,
        text: 'Khám phá',
        icon: <TbChartArcs size={24} />
    },
    {
        path: paths.ZING_CHART,
        text: '#zingchart',
        icon: <HiOutlineChartPie size={24} />
    },
    {
        path: paths.FOLLOW,
        text: 'Theo dõi',
        icon: <MdOutlineFeed size={24} />
    },
]