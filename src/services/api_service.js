import instance from "../utils/axios_config.js"

export const getHome = async () => {
    try {
        let response = await instance({ url: "/page/get/home", method: "get" })
        return response.data
    } catch (error) {
        return error
    }
}

export const getSongDetails = async (id) => {
    try {
        let response = await instance({ url: "/song/get/info", method: "get", params: { id: id } })
        return response.data
    } catch (error) {
        return error
    }
}

export const getSongStreaming = async (id) => {
    try {
        let response = await instance({ url: "/song/get/streaming", method: "get", params: { id: id } })
        return response.data
    } catch (error) {
        return error
    }
}

export const getDetailsPlaylist = async (id) => {
    try {
        let response = await instance({ url: "/page/get/playlist", method: "get", params: { id: id } })
        return response.data
    } catch (error) {
        return error
    }
}

export const searchKeyword = async (keyword) => {
    try {
        let response = await instance({ url: "/search/multi", method: "get", params: { query: keyword } })
        return response.data
    } catch (error) {
        return error
    }
}

export const getArtistSongs = async (id) => {
    try {
        let response = await instance({ url: "/song/get/list", method: "get", params: { id: id, page: 1, count: 50 } })
        return response.data
    } catch (error) {
        return error
    }
}

export const getArtist = async (alias) => {
    try {
        let response = await instance({ url: "/page/get/artist", method: "get", params: { name: alias } })
        return response.data
    } catch (error) {
        return error
    }
}


export const getChartHome = async (alias) => {
    try {
        let response = await instance({ url: "/page/get/chart-home", method: "get", params: { name: alias } })
        return response.data
    } catch (error) {
        return error
    }
}

export const getWeekChart = async (id, week, year) => {
    try {
        let response = await instance({
            url: "/page/get/week-chart", method: "get", params: { id: id }
        })
        return response.data
    } catch (error) {
        return error
    }
}
