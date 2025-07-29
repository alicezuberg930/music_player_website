import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import { searchTypeAction } from '../store/actions/music_actions'
import { useEffect } from 'react'
import { formatDuration } from '../utils/utils'
import { icons } from '../utils/icons'

const SearchMVPage = () => {
    const { BsPlayFill } = icons
    const { searchTypeData } = useSelector(state => state.music)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q')

    useEffect(() => {
        if (q.length > 0) dispatch(searchTypeAction(q, 'video'))
    }, [q, dispatch])

    return (
        <div className='w-full'>
            <h3 className='text-xl font-bold mb-4'>MV</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8'>
                {searchTypeData && searchTypeData?.items?.map(video => (
                    <NavLink to={video?.link.split('.')[0]} className='relative group' key={video?.encodeId}>
                        <div className='relative aspect-video rounded-md overflow-hidden mb-3'>
                            <img src={video?.thumbnailM} alt={video?.title} className='w-full h-full object-cover rounded-md mb-2 group-hover:scale-110 transition-all' />
                            {/* Duration */}
                            <div className='absolute bottom-1 right-1 bg-[rgba(0,0,0,0.7)] py-1 px-1.5 rounded-md'>
                                <p className='text-xs text-white'>{formatDuration(video?.duration)}</p>
                            </div>
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                                <BsPlayFill size={64} fill='white' />
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={video?.artist?.thumbnail} alt={video?.artist?.name} className='w-10 h-10 object-cover rounded-full' />
                            <div className='flex-1'>
                                <h4 className='text-sm font-semibold'>{video?.title}</h4>
                                {video?.artists?.map((artist, i) => (
                                    <NavLink className='text-xs text-gray-500' to={`/artist${artist?.link}`} key={artist?.id}>
                                        {artist?.name + (i < video?.artists?.length - 1 ? ', ' : '')}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SearchMVPage