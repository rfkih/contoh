import React,{useState, useEffect} from 'react'
import axios from '../../utils/axios'
import ProductList from './component/ProductList';
import "./style.css"

function ManageProduct() {
    const [products, setProducts] = useState ([]);
    
    useEffect(() =>{
        axios.get("/products")
        .then((res) => {
          const {data} = res
          setProducts(data);
        })
        .catch((error) => {
          alert(error.message)
        });
    }, []);

    const renderProducts = () => {
      return products.map((product) =><ProductList product={product}/>);
    };


  return ( 
    <div className="container">
      <h1 className='text-center'>Manage Product</h1>
      <table className="table mt-4">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderProducts()}
        </tbody>
      </table> 

      <table className= "W-100" >
        <tfoot className="bg-light">
          <tr>
            <td>
              <input 
                placeholder='Product Name'
                name="addProductName"
                type ="text"
                className= "formcontrol" 
                />
              </td>
            <td>
              <input 
                placeholder='Price'
                name ="addPrice" 
                type ="number" 
                className='formcontrol'/>
            </td>
            <td>
              <input 
                placeholder='Image'
                name="addProductImage"
                type="text"
                className="form-control"
              />
            </td>
            <td>
                <input 
                  placeholder='Description'
                  name="addDescription"
                  type="text"
                  className="form-control"
                />
            </td>
            <td>
              <select name ="addCategory" className='form-control'>
                <option value="">All Items</option>
                <option value="kaos">Kaos</option>
                <option value="celana">Celana</option>
                <option value="aksesoris">Aksesoris</option>
              </select>
            </td>
            <td colSpan="2">
              <button className='btn btn-info'>Add Product</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ManageProduct
