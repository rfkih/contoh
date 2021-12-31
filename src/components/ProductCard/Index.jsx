import React from 'react'
import './style.css'

function ProductCard(props) {

    const {productName, productImage, description} = props.product;

    return (
        <div className='card product-card'>
            <img src={productImage} className='img-card-top' alt='gambar'/>
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="#" className='btn btn-primary'> 
                Detail
                </a>
            </div>
        </div>
    )
}

export default ProductCard