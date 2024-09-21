import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { playPlaylist, setCurrentSongId, setPlay } from "../store/actions/get_music"
import { useNavigate } from "react-router-dom"

const HomeBannerSlider = () => {
    const dispatch = useDispatch()
    const { banners } = useSelector(state => state.app)
    const navigate = useNavigate()

    const getArrSlider = (start, end, length) => {
        const limit = (start > end) ? length : end
        let output = []
        for (let i = start; i <= limit; i++) {
            output.push(i)
        }
        if (start > end) {
            for (let i = 0; i <= end; i++) {
                output.push(i)
            }
        }
        return output
    }

    useEffect(() => {
        let min = 0
        let max = 2
        const slider = document.getElementsByClassName('slider-item')
        const interval = setInterval(() => {
            const list = getArrSlider(min, max, slider.length - 1)
            for (let i = 0; i < slider.length; i++) {
                // reset animations from the images
                slider[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                slider[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                slider[i]?.classList?.remove('animate-slide-left-2', 'order-2', 'z-10')
                // show image within min and max range and hide image outside of that range
                if (list.some(item => item === i)) {
                    slider[i].style.display = 'block'
                } else {
                    slider[i].style.display = 'none'
                }
            }
            // add animation for the images (the first one to most right and the 2nd and 3rd to left)
            list.forEach(item => {
                if (item === max) {
                    slider[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    slider[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    slider[item]?.classList?.add('animate-slide-left-2', 'order-2', 'z-10')
                }
            })
            min === slider.length - 1 ? min = 0 : min++
            max === slider.length - 1 ? max = 0 : max++
        }, 4000)
        return () => {
            interval && clearInterval(interval)
        }
    }, [])

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(setCurrentSongId(item?.encodeId))
            dispatch(setPlay(true))
            dispatch(playPlaylist(false))
        }
        if (item?.type === 2) {

        }
        if (item?.type === 4) {
            const playlistPath = item?.link?.split('.')[0]
            navigate(playlistPath)
        }
    }

    return (
        <div className="flex justify-between gap-4 w-full pt-8 overflow-hidden">
            {
                banners?.map((item, index) => {
                    return (
                        <img key={item.encodeId} src={item.banner} alt="banner"
                            onClick={() => handleClickBanner(item)}
                            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default HomeBannerSlider