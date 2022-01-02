import validateData from 'json-server/lib/server/router/validate-data';
import React from 'react'

function ProductList(props) {

    const {id, productName, productImage, price, description, category} = props.product;

    return (
        <tr>
            <td>{val}</td>
        </tr>
    )
}

export default ProductList
