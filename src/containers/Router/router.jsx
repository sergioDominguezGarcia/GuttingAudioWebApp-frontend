import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Releases from '../../views/Releases'
import eps from '../../data/eps.json'
import Artists from '../../views/Artists'
import Detail from '../../views/ArtistDetail'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer.jsx'
import ReleasesDetails from '../../views/ReleasesDetails/index.jsx'
import Events from '../../views/Events'
import Home from '../../views/Home/home.jsx'
import Radio from '../../views/Radio/radio'
import Mastering from '../../views/Mastering/mastering'
import Contact from '../../views/Contact/contact'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Router = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/releases/:epId" element={<ReleasesDetails eps={eps} />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<Detail />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/mixingmastering" element={<Mastering />} />
        <Route path="/events" element={<Events />} /> 
        <Route path="/contact" element={<Contact />} /> 

        
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default Router
