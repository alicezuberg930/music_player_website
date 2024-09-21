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