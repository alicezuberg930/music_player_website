import { combineReducers } from "redux";
import appReducer from "./app_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import musicReducer from "./music_reducer";

const config = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const currentSongConfig = {
    ...config,
    key: 'current_song',
    whitelist: [
        'currentSongId', 'isPlaying', 'atPlaylist', 'songs', 'currentSongData',
        'currentPlaylistName', 'recentSongs', 'searchData', 'searchSongs', 'weekChartLinks'
    ]
}

const combineReducer = combineReducers({
    app: appReducer,
    music: persistReducer(currentSongConfig, musicReducer)
})

export default combineReducer