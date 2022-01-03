import React,{useState, useEffect} from 'react'
import axios from '../../utils/axios'
import ProductList from './component/ProductList';
import "./style.css"
import {Button} from 'reactstrap'

function ManageProduct() {
    const [products, setProducts] = useState ([]);
    const [formState, setFormState] = useState ({
      productName:"",
      productImage:"",
      price: 0,
      description: "",
      category:"",
    });

    const handleChange =(e) => {
      setFormState({...formState, [e.target.name]: e.target.value})
    };

    const fetchProducts = () =>{
      axios.get("/products")
      .then((res) => {
        const {data} = res
        setProducts(data);
      })
      .catch((error) => {
        alert(error.message)
      });
    }
    
    useEffect(() =>{
       fetchProducts();
    }, []);

    const renderProducts = () => {
      return products.map((product) =><ProductList product={product}/>);
    };
    

    const addNewProduct=() =>{
      const {productImage, price, productName, category, description} = formState;

      const newProduct ={
        id: new Date().getTime(),
        productImage, 
        price, 
        productName, 
        category, 
        description
      };


      axios
        .post("/products" ,newProduct)
        .then(res => console.log({res}))
        .catch((error) => console.log({error}));
      fetchProducts()
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
                name="productName"
                type ="text"
                className= "formcontrol" 
                onChange={handleChange}
                />
              </td>
            <td>
              <input 
                placeholder='Price'
                name ="price" 
                type ="number" 
                className='formcontrol'
                onChange={handleChange}
                />
            </td>
            <td>
              <input 
                placeholder='Image'
                name="productImage"
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </td>
            <td>
                <input 
                  placeholder='Description'
                  name="description"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
            </td>
            <td>
              <select 
                name ="category" 
                className='form-control ' 
                onChange={handleChange}
                >
                <option value="">All Items</option>
                <option value="kaos">Kaos</option>
                <option value="celana">Celana</option>
                <option value="aksesoris">Aksesoris</option>
              </select>
            </td>
            <td colSpan="2">
              <Button outline color='primary' onClick={addNewProduct}> Add Product</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ManageProduct
