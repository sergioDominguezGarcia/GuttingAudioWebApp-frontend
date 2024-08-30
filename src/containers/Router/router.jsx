import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../../views/Home";
import Playlists from '../../components/Playlist';
const Router = () => {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlist" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
