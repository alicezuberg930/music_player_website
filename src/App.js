import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PublicPage from './pages/PublicPage';
import { paths } from './utils/global_paths';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHomeAction } from './store/actions/get_home';
import PlaylistPage from "./pages/PlaylistPage";
import WeekRankPage from "./pages/WeekRankPage";
import ZingChartPage from "./pages/ZingChartPage";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeAction())
  })

  return (
    <Routes>
      <Route path={paths.PUBLIC} element={<PublicPage />} >
        <Route path={paths.HOME} element={<HomePage />} />
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.PLAYLIST__TITLE__ID} element={<PlaylistPage />} />
        <Route path={paths.ALBUM__TITLE__ID} element={<PlaylistPage />} />
        <Route path={paths.WEEKRANK__TITLE__ID} element={<WeekRankPage />} />
        <Route path={paths.ZING_CHART} element={<ZingChartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
