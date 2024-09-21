import action_types from "./action_types"

export const setCurrentSongId = (id) => (dispatch) => {
    dispatch({ type: action_types.SET_CURRENT_SONG_ID, songId: id })
}

export const setPlay = (isPlaying) => (dispatch) => {
    dispatch({ type: action_types.PLAY, isPlaying: isPlaying })
}

export const playPlaylist = (flag) => (dispatch) => {
    dispatch({ type: action_types.AT_PLAYLIST, flag })
}

export const setPlaylistSongs = (songs) => async (dispatch) => {
    dispatch({ type: action_types.PLAYLIST, songs: songs })
}

export const setCurrentSongData = (song) => async (dispatch) => {
    dispatch({ type: action_types.SET_CURRENT_SONG_DATA, song })
}

export const setCurrentPlaylistName = (playlistName) => async (dispatch) => {
    dispatch({ type: action_types.SET_CURRENT_PLAYLIST_NAME, playlistName })
}