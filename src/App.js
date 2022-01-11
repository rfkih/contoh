import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ManageProduct from './pages/ManageProduct/Index'
import Navigation from "./components/Navigation"
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login/Index';


import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="manage-product" element={<ManageProduct/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="product/:id" element={<ProductDetail/>}/>
            </Routes>  
        </Router>
    )
}

export default App;
