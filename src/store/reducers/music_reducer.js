import action_types from "../actions/action_types";

const initState = {
    currentSongId: null,
    isPlaying: false,
    atPlaylist: false,
    songs: [],
    currentSongData: null,
    currentPlaylistName: null,
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
        default:
            return state
    }
}

export default musicReducer