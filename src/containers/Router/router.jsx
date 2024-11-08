import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Releases from '../../views/Releases'
import {eps} from '../../constants/constants.js'

import Artists from '../../views/Artists';
import Detail from '../../views/ArtistDetail'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import ReleasesDetails from '../../views/ReleasesDetails/index.jsx'


import Home from '../../views/Home/home.jsx'
import Radio from '../../views/Radio/radio' 


const Router = () => {
  


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/releases/:epId" element={<ReleasesDetails eps={eps} />} />

        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<Detail />} />

        <Route path="/radio" element={<Radio />} /> 
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
};

export default Router;
