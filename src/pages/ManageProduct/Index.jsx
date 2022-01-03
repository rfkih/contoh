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
    </div>
  );
}

export default ManageProduct
