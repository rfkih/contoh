import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ManageProduct from './pages/ManageProduct/Index'
import Navigation from "./components/Navigation"


import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="manage-product" element={<ManageProduct/>}/>
            </Routes>  
        </Router>
    )
}

export default App;
