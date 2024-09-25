import action_types from "../actions/action_types";

const initState = {
    banners: [],
    playlistsList: [],
    showSideBarRight: true,
    newRelease: {},
    weekCharts: [],
    favoriteArtists: {},
    chart: {},
    ranks: [],
    spotLightArtists: [],
    scrollTop: true,
    screenWidth: window.innerWidth
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case action_types.GET_HOME:
            return {
                ...state,
                banners: action.homeData?.find(item => item?.sectionId === "hSlider")?.items || [],
                playlistsList: action.homeData?.filter(item => item?.sectionType === "playlist") || [],
                newRelease: action.homeData?.find(item => item?.sectionType === "new-release") || {},
                weekCharts: action.homeData?.find(item => item?.sectionType === "weekChart")?.items || [],
                favoriteArtists: action.homeData?.find(item => item?.sectionId === "hMix") || {},
                chart: action.homeData?.find(item => item?.sectionId === "hZC")?.chart || {},
                ranks: action.homeData?.find(item => item?.sectionId === "hZC")?.items || {},
                spotLightArtists: action.homeData?.find(item => item?.sectionType === "artistSpotlight")?.items || [],
            }
        case action_types.SHOW_SIDEBAR_RIGHT:
            return {
                ...state,
                showSideBarRight: action.flag
            }
        case action_types.IS_SCROLL_TOP:
            return {
                ...state,
                scrollTop: action.flag
            }
        case action_types.SCREEN_WIDTH:
            return {
                ...state,
                screenWidth: action.screenWidth
            }
        default:
            return state
    }
}

export default appReducer