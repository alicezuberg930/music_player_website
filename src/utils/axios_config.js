import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL, headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
    }),
})

// do something before requesting
axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
// do something before responding
axios.interceptors.response.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

export default instance