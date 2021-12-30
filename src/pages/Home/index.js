import React from 'react'
import ListProduct from './components/ListProduct'
import ProductManager from './components/ProductManager'


function index() {
    return (
        <div className='row container mt-5'>
            <ProductManager/>
            <ListProduct/>
        </div>
    )
}

export default index
