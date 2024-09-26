import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../../views/Home";
import Artists from '../../views/Artists';
import Detail from '../../views/ArtistDetail'
import Header from '../../components/Header';
import Footer from '../../components/Footer'


const Router = () => {
  


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;
