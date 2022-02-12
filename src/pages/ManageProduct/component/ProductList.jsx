import validateData from 'json-server/lib/server/router/validate-data';
import React, {useState} from 'react'
import axios from '../../../utils/axios'

function ProductList(props) {

    const {id, productName, productImage, price, description, category} = props.product;

    const [formState, setFormState] = useState ({
        editProductName: productName, 
        editProductImage: productImage, 
        editPrice: price, 
        editDescritpion: description, 
        editCategory: category
    });

    const handleChange = (e) =>{
       
        setFormState({...formState, [e.target.name]: e.target.value}) 
};

    const {
        editProductName, 
        editProductImage, 
        editPrice, 
        editDescription, 
        editCategory 
    } = formState

    const [isEdit, setIsEdit] = useState(false)

    const onBtnDeleteClick = () =>{
        axios
        .delete(`/products/${id}`)
        .then((rest) => {
            alert("Berhasil delete product");
            props.fetchProducts()
        })
    }

    const onBtnSaveClick = () => {

        const newData = {
            productName : editProductName, 
            productImage :editProductImage, 
            price : editPrice, 
            description : editDescription , 
            category : editCategory
        }
        axios.patch(`/products/${id}` , newData)
        .then((rest) => {
            setIsEdit(false)
            props.fetchProducts()
            alert("Berhasil update product"); 
        }).catch((err) => alert("Gagal update product"))
    }
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
                    <input type="text" 
                    Name="editProductName" 
                    value={editProductName}
                    onChange={handleChange}/>
                </td>
                <td>
                    <input type="text"
                     Name="editPrice"
                      value={editPrice} 
                      onChange={handleChange}/>
                </td>
                <td>
                    <input type="text" 
                    Name="editImage" 
                    value={editProductImage} 
                    onChange={handleChange}/>
                </td>
                <td>
                    <input type="text" 
                    Name="editDescription" 
                    value={editDescription} 
                    onChange={handleChange} />
                </td>
                <td>
                    <select 
                        name ="editCategory" 
                        className='form-control ' 
                        value={editCategory}
                        onChange={handleChange}
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
