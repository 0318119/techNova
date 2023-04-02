import React from 'react'
// REACT ROUTER ================================================
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// PAGES RENDERD ================================================
import Home from '../pages/Home';
// BOOTSTRAP ====================================================
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing