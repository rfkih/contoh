import React from 'react'
import {useParams} from "react-router-dom"

function ProductDetail() {
    const params = useParams()
    return (
        <div>
            <h1>Product Detail : {params.id}</h1>     
        </div>
    )
}

export default ProductDetail
