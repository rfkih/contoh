import validateData from 'json-server/lib/server/router/validate-data';
import React, {useState} from 'react'
import axios from '../../../utils/axios'

function ProductList(props) {

    const {id, productName, productImage, price, description, category} = props.product;

    const [isEdit, setIsEdit] = useState(false)

    const onBtnDeleteClick = () =>{
        axios
        .delete(`/products/${id}`)
        .then((rest) => {
            alert("Berhasil delete product");
            props.fetchProducts()
        })
    }

    const onBtnSaveClick = () => {}
    const onBtnEditClick = () => {
        setIsEdit(true)
    }
    const onBtnCancelClick = () =>{
        setIsEdit(false)
    }

    if(isEdit) {
        return (
            <tr>
                <td>{id}</td>
                <td>
                    <input type="text" Name="ProductName" />
                </td>
                <td>
                    <input type="text" Name="Price" />
                </td>
                <td>
                    <input type="text" Name="Image" />
                </td>
                <td>
                    <input type="text" Name="Description" />
                </td>
                <td>
                    <select 
                        name ="Category" 
                        className='form-control ' 
                        
                    >
                        <option value="">All Items</option>
                        <option value="kaos">Kaos</option>
                        <option value="celana">Celana</option>
                        <option value="aksesoris">Aksesoris</option>
                    </select>
                </td>
                <td>
                    <button onClick={onBtnCancelClick} className=" w-100 btn btn-outline-danger">Cancel</button>
                
                    <button onClick={onBtnSaveClick} className=" w-100 btn btn-outline-success">Save</button>
                </td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>
                <img className='admin-product-image' src={productImage} alt="gambar"/>
            </td>
            <td>{description}</td>
            <td>{category}</td>
            <td>
                <button onClick={onBtnEditClick} className="w-100 btn btn-outline-secondary">Edit</button>
            
                <button onClick={onBtnDeleteClick} className="w-100 btn btn-outline-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ProductList
