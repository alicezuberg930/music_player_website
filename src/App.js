import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PublicPage from './pages/PublicPage';
import { paths } from './utils/global_paths';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHomeAction, setCurrentScreenWidth } from './store/actions/home_actions';
import PlaylistPage from "./pages/PlaylistPage";
import ZingChartPage from "./pages/ZingChartPage";
import SearchPage from "./pages/SearchPage";
import SearchSongPage from "./pages/SearchSongPage";
import SearchAllPage from "./pages/SearchAllPage";
import SearchPlaylistPage from "./pages/SearchPlaylistPage";
import SearchArtistPage from "./pages/SearchArtistPage";
import SearchMVPage from "./pages/SearchMVPage";
import ArtistPage from "./pages/ArtistPage";
import WeeklyZingChartPage from "./pages/WeeklyZingChartPage";
import VideoClipPage from "./pages/VideoClipPage";

function App() {
  const dispatch = useDispatch()
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  const setWidth = (e) => {
    setCurrentWidth(e.target.innerWidth)
  }

  useEffect(() => {
    dispatch(getHomeAction())
    window.addEventListener('resize', setWidth)
    return () => { window.removeEventListener('resize', setWidth) }
  }, [])

  useEffect(() => {
    dispatch(setCurrentScreenWidth(currentWidth))
  }, [currentWidth])

  return (
    <Routes>
      <Route path={paths.PUBLIC} element={<PublicPage />} >
        <Route path={paths.HOME} element={<HomePage />} />
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.PLAYLIST__TITLE__ID} element={<PlaylistPage />} />
        <Route path={paths.ALBUM__TITLE__ID} element={<PlaylistPage />} />
        <Route path={paths.WEEKRANK__TITLE__ID} element={<WeeklyZingChartPage />} />
        <Route path={paths.ZING_CHART} element={<ZingChartPage />} />
        <Route path={paths.SEARCH} element={<SearchPage />}>
          <Route path={paths.SEARCH_ALL} element={<SearchAllPage />} />
          <Route path={paths.SEARCH_SONG} element={<SearchSongPage />} />
          <Route path={paths.SEARCH_PLAYLIST} element={<SearchPlaylistPage />} />
          <Route path={paths.SEARCH_ARTIST} element={<SearchArtistPage />} />
          <Route path={paths.SEARCH_MV} element={<SearchMVPage />} />
        </Route>
        <Route path={paths.ARTIST__NAME} element={<ArtistPage />} />
      </Route>
      <Route path={paths.VIDEOCLIP__TITLE__ID} element={<VideoClipPage />} />
    </Routes>
  );
}

export default App;
