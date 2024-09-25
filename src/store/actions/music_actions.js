import { getArtistSongs, getDetailsPlaylist, searchKeyword } from "../../services/api_service"
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

export const search = (keyword) => async (dispatch) => {
    try {
        const response = await searchKeyword(keyword)
        if (response?.err === 0) {
            dispatch({ type: action_types.SEARCH, searchData: response?.data })
        } else {
            dispatch({ type: action_types.SEARCH, searchData: null })
        }
    } catch (error) {
        dispatch({ type: action_types.SEARCH, searchData: null })
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