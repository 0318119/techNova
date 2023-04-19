import React from 'react'
// REACT ROUTER ================================================
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// PAGES RENDERD ================================================
import Home from '../pages/Home';
// BOOTSTRAP ====================================================
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import OurWork from '../pages/OurWork';
import AboutUs from '../pages/AboutUs';

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/OurWork" element={<OurWork />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing