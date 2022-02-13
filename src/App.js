import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'

import ManageProduct from './pages/ManageProduct/Index'
import Navigation from "./components/Navigation"
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login/Index';
import Home from './pages/Home'
import Register from './pages/Register/index';
import NotFound from './pages/NotFound';
import { keepLoginAction} from "./store/actions"


function App() {
    const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false)
    const dispatch = useDispatch();

    useEffect(() =>{
        const userLocalStorage = localStorage.getItem("userData");
        if(userLocalStorage){
            const userData = JSON.parse(userLocalStorage)

            const {id, username, role} = userData
        
            dispatch (keepLoginAction({ id, username, role}))
        }

        setIsLocalStorageChecked(true);
    }, [])

    if (isLocalStorageChecked) {

        return (
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="manage-product" element={<ManageProduct/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="product/:id" element={<ProductDetail/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>  
            </Router>
        )
        
    } else {
        return <h1> Loading .. </h1>
    }
    
}

export default App;
