import { getHome } from "../../services/api.service.js"
import action_types from "./action_types.js"

export const getHomeAction = () => async (dispatch) => {
    try {
        const response = await getHome()
        if (response?.err === 0) {
            dispatch({ type: action_types.GET_HOME, homeData: response.data.items })
        } else {
            dispatch({ type: action_types.GET_HOME, homeData: null })
        }
    } catch (error) {
        dispatch({ type: action_types.GET_HOME, homeData: null })
    }
}

export const setShowSideBarRight = (flag) => (dispatch) => {
    dispatch({ type: action_types.SHOW_SIDEBAR_RIGHT, flag })
}

export const isScrollTop = (flag) => (dispatch) => {
    dispatch({ type: action_types.IS_SCROLL_TOP, flag })
}

export const setWeekChartLink = (links) => (dispatch) => {
    dispatch({ type: action_types.WEEK_CHART_LINK, links })
}

export const setCurrentScreenWidth = (screenWidth) => (dispatch) => {
    dispatch({ type: action_types.SCREEN_WIDTH, screenWidth })
} 