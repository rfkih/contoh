import React from 'react'
import './style.css'

function ProductCard(props) {

    const {productName, productImage, price} = props.product;

    return (
       <div className="card product-card">
           <img src={productImage} alt="gambar"/>
           <div className="mt-2">
               <div>
                   <h5>{productName}</h5>
                   <span className="text-muted"> Rp. {price}</span>
               </div>
               <div className="d-flex flex-row justify-content-end">
                   <button className='btn btn-primary mt-2 w-100'>Detail </button>
               </div>
           </div>

       </div>
    )
}

export default ProductCard
