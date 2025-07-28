import action_types from "../actions/action_types";

const initState = {
    currentSongId: null,
    isPlaying: false,
    atPlaylist: false,
    songs: [],
    currentSongData: null,
    currentPlaylistName: null,
    recentSongs: [],
    searchData: null,
    searchTypeData: null,
    searchSongs: [],
    weekChartLinks: [],
    isTheater: true
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case action_types.SET_CURRENT_SONG_ID:
            return {
                ...state,
                currentSongId: action.songId || null
            }
        case action_types.PLAY:
            return {
                ...state,
                isPlaying: action.isPlaying
            }
        case action_types.AT_PLAYLIST:
            return {
                ...state,
                atPlaylist: action.flag
            }
        case action_types.PLAYLIST:
            return {
                ...state,
                songs: action.songs || []
            }
        case action_types.SET_CURRENT_SONG_DATA:
            return {
                ...state,
                currentSongData: action.song || null
            }
        case action_types.SET_CURRENT_PLAYLIST_NAME:
            return {
                ...state,
                currentPlaylistName: action.playlistName || null
            }
        case action_types.ADD_RECENT_SONG:
            let currentSongs = state.recentSongs
            if (action.recentSong) {
                if (currentSongs.find(i => i.encodeId === action.recentSong.encodeId)) {
                    currentSongs = currentSongs.filter(i => i.encodeId !== action.recentSong.encodeId)
                }
                if (currentSongs.length > 29) currentSongs.pop()
                currentSongs = [action.recentSong, ...currentSongs]
            }
            return {
                ...state,
                recentSongs: currentSongs
            }
        case action_types.SEARCH_MULTI:
            return {
                ...state,
                searchData: action.searchData || {}
            }
        case action_types.SEARCH_SONGS:
            return {
                ...state,
                searchSongs: action.songs || []
            }
        case action_types.SEARCH_TYPE:
            return {
                ...state,
                searchTypeData: action.searchTypeData || {}
            }
        case action_types.WEEK_CHART_LINK:
            return {
                ...state,
                weekChartLinks: action.links || []
            }
        case action_types.THEATER:
            return {
                ...state,
                isTheater: action.flag
            }
        default:
            return state
    }
}

export default musicReducer