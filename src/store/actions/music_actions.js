import { getArtistSongs, searchMulti, searchType } from "../../services/api.service"
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

export const addRecentSong = (recentSong) => async (dispatch) => {
    dispatch({ type: action_types.ADD_RECENT_SONG, recentSong })
}

export const searchMultiAction = (keyword) => async (dispatch) => {
    try {
        const response = await searchMulti(keyword)
        if (response?.err === 0) {
            dispatch({ type: action_types.SEARCH_MULTI, searchData: response?.data })
        } else {
            dispatch({ type: action_types.SEARCH_MULTI, searchData: null })
        }
    } catch (error) {
        dispatch({ type: action_types.SEARCH, searchData: null })
    }
}

export const searchTypeAction = (keyword, type, page = 1, count = 30) => async (dispatch) => {
    try {
        const response = await searchType(keyword, type, page, count)
        if (response?.err === 0) {
            dispatch({ type: action_types.SEARCH_TYPE, searchTypeData: response?.data })
        } else {
            dispatch({ type: action_types.SEARCH_TYPE, searchTypeData: null })
        }
    } catch (error) {
        dispatch({ type: action_types.SEARCH_TYPE, searchTypeData: null })
    }
}

export const getSearchSongs = (id) => async (dispatch) => {
    try {
        const response = id ? await getArtistSongs(id) : null
        if (response?.err === 0) {
            dispatch({ type: action_types.SEARCH_SONGS, songs: response?.data?.items })
        } else {
            dispatch({ type: action_types.SEARCH_SONGS, songs: null })
        }
    } catch (error) {
        dispatch({ type: action_types.SEARCH_SONGS, songs: null })
    }
}

export const setTheater = (flag) => async (dispatch) => {
    dispatch({ type: action_types.THEATER, flag })
}
