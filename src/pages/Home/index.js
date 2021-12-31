import React,{useState, useEffect} from 'react'
import ListProduct from './components/ListProduct'
import ProductManager from './components/ProductManager'
import axios from 'axios';


function Index() {

    

    const [products, setProducts] = useState([]);

    useEffect( async () =>{
        axios.get("http://localhost:2021/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {

        })
    },[])

    console.log(products);
    return (
        <div className='row container mt-5'>
            <ProductManager/>
            <ListProduct products={products}/>
        </div>
    )
}

export default Index
